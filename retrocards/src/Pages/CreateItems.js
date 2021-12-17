import { useFormik} from 'formik'
import api from "../api"
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Loading from '../components/loading/Loading'


function CreateItems() {

  const{loading, setLoading}= useContext(AuthContext)

  const idRetrospectiva = localStorage.getItem('IdRetrospectiva')

  const crItems = async (id,values) => {
    setLoading(true)
    const {data} = await api.post(`/item?id=${id}`,values)
    setLoading(false)
  }


  const formik = useFormik({
    initialValues:{
      tipo:'',
      titulo:'',
      descricao:''
    }, onSubmit:async (values) =>{

  //    const {data} =  await axios.post('https://my-application-teste.herokuapp.com/auth',values)
      console.log(values)
      // console.log(data)
      crItems(idRetrospectiva,values)
      formik.resetForm()
    }
  })

  return (
    <div>

      {loading && <Loading/>}
      {!loading && 
      <div>
        
        <h1>Criar Itens da sprint</h1>

        <form onSubmit={formik.handleSubmit}>
            
          <div >
            <label htmlFor="tipo">Tipo</label>
          
            <select  onChange={formik.handleChange} value={formik.values.tipo} name="tipo" id="tipo">

              <option value='' >Selecione uma opção</option>
              <option value='O que funcionou bem' >O que funcionou bem?</option>
              <option value='O que pode ser melhorado  '>O que pode ser melhorado ?</option>
              <option value='O que faremos no próximo sprint para melhorar'>    No próximo sprint,poderiamos...</option>
            </select>
          </div>

          <div>
            <label htmlFor="titulo">Título</label>
            <input type="text" name="titulo" id="titulo" placeholder="Digite um título" onChange={formik.handleChange} value={formik.values.titulo} />
          </div>

          <div >
            <label htmlFor="descricao">Descrição</label>
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

export default CreateItems
