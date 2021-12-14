import api from "../api"


function KudoBox (){

  const goToCreateKudoCard = ()=>{
    
    window.location.href = '/createkudocards'
  }
  const getKudoCards= async() =>{

    const idSprint = localStorage.getItem('idSprint')

    const {data} = await api.get(`/kudobox/id-sprint?idSprint=${idSprint}`)
    // setListKudoCards(data)
    console.log(data)
  }
  
  return(
    <div>
      <h1>Página KudoBox</h1>
      <button onClick={()=> goToCreateKudoCard()}>Criar novo Kudo Card </button>
      <p>Kudo card</p>
      <p>Kudo card</p>
      <p>Kudo card</p>
      <p>Kudo card</p>
    </div>
  )
}

export default KudoBox;