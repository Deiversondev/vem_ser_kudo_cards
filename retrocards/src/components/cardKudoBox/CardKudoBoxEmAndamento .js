import { useContext, useEffect } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"



function CardKudoBoxEmAndamento (){

  useEffect(()=>{
    getKudoBoxEmAndamento()
  },[])

  const{listKudoBoxesEmAndamento, setListKudoBoxesEmAndamento} = useContext(ListContext)
  
  const getKudoBoxEmAndamento = async()=> {
    console.log('get box em andamento chamada')
    const {data} = await api.get('/kudobox')
    console.log(data)
    setListKudoBoxesEmAndamento(data)
    console.log(listKudoBoxesEmAndamento)

  }
  
  return (
    <div>
      <h3>KudoBoxes em andamento:</h3>
      <ul>
        {listKudoBoxesEmAndamento.map(kudoBox => (
          <div key={kudoBox.idKudoBox}>
            <li>
            {kudoBox.idKudoBox}
            {kudoBox.titulo}
            {kudoBox.idSprint}
            {kudoBox.dataLeitura}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default CardKudoBoxEmAndamento;