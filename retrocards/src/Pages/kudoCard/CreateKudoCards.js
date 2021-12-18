import { useFormik} from 'formik'
import api from '../../api'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'

function CreateKudoCards() {

  const{loading, setLoading}= useContext(AuthContext)

  const idKudoBox = localStorage.getItem('idKudoBox') 

  const createKudoCard = async (values) => {
    setLoading(true)
    const {data} =  await api.post(`/kudocard?id=${idKudoBox}`,values)
    setLoading(false)
    alert('Novo kudo card criado com sucesso!')
    window.history.back()
  }

    const formik = useFormik({
        initialValues:{
          dataCriacao: '2021-12-14',
          de:'',
          descricao:'',
          para:'',
          titulo:'',
        }, onSubmit:async (values) =>{
          createKudoCard(values)

          formik.resetForm()
        }
    })

  return (
    <div>

      {loading && <Loading/>}
      {!loading && 
      <div>
        <h1>Criar Kudo Cards</h1>

        <form onSubmit={formik.handleSubmit}>
          
          <div>
            <label htmlFor="titulo">Título</label>
            <input 
            type="text" 
            name="titulo" 
            id="titulo" 
            placeholder="Digite um título" 
            onChange={formik.handleChange} 
            value={formik.values.titulo} 
            />
          </div>

          <div >
            <label htmlFor="de">De</label>
            <input 
            type="text" 
            name="de" 
            id="de" 
            placeholder="de" 
            onChange={formik.handleChange} 
            value={formik.values.de} 
            />
          </div>

          <div >
            <label htmlFor="para">Para</label>
            <input 
            type="text" 
            name="para" 
            id="para" 
            placeholder="para" 
            onChange={formik.handleChange} 
            value={formik.values.para} 
            />
          </div>

          <div >
            <label htmlFor="descricao">Descrição: </label>
            <textarea  name="descricao" id="descricao" placeholder="descricao" onChange={formik.handleChange} value={formik.values.descricao} cols="30" rows="10"></textarea>
          </div>

          <div>
            <button type="submit">Salvar</button>
          </div>

        </form>
      </div>
      }
    </div>
  )
}

export default CreateKudoCards;
