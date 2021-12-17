import { useFormik} from 'formik'
import api from '../api'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Loading from '../components/loading/Loading'


function CreateKudoBox() {

  const{loading, setLoading}= useContext(AuthContext)

  const idSprint = localStorage.getItem('idSprint') 

  const createKudobox = async (values) => {
    
    setLoading(true)
    const {data} =  await api.post(`/kudobox?id=${idSprint}`,values)
    setLoading(false)
  }

  const formik = useFormik({
    initialValues:{
      titulo:'',
      dataLeitura:'',
      statusKudoBoxEntity:'EM_ANDAMENTO'

    }, onSubmit:async (values) =>{
      console.log(values)
      await createKudobox(values)

      formik.resetForm()
    }
  })

  return (
    <div>

      {loading && <Loading/>}
      {!loading && 
      <div>
      <h1>Criar Nova Kudo Box</h1>
      
      <form onSubmit={formik.handleSubmit}>
          
        <div>
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" id="titulo" placeholder="Digite um título" onChange={formik.handleChange} value={formik.values.titulo} />
        </div>

        <div >
          <label htmlFor="dataLeitura">Data da Leitura:</label>
          <input type="date" name="dataLeitura" id="dataLeitura" placeholder="Digite uma Data" onChange={formik.handleChange} value={formik.values.dataLeitura} />
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

export default CreateKudoBox;