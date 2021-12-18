import { useFormik} from 'formik';
import api from '../../api';
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'


function CreateRetrospectiva() {

  const{loading, setLoading}= useContext(AuthContext)

  const addRetrospectiva = async (values) =>{

      const id = localStorage.getItem('idSprint')
      setLoading(true)
      const {data} = await api.post(`/retrospectiva?id=${id}`,values)
      setLoading(false)
      alert('Nova retrospectiva criada com sucesso!')
      window.history.back()
    }

  const formik = useFormik({
    initialValues:{
      tituloRetrospectiva:'',
      dataReuniao:'',
    }, onSubmit:async (values) =>{

      addRetrospectiva(values)
      console.log(values)
        

        formik.resetForm()
    }
  })




  return (
      <div>
        {loading && <Loading/>}
        {!loading && 
        <div>
          <h1>Criar Nova Retrospectiva</h1>
        
          <form onSubmit={formik.handleSubmit}>
              
              <div>
                  <label htmlFor="tituloRetrospectiva">Título</label>
                  <input type="text" name="tituloRetrospectiva" id="tituloRetrospectiva" placeholder="Digite um título" onChange={formik.handleChange} value={formik.values.tituloRetrospectiva} />
              </div>

              <div >
                  <label htmlFor="dataReuniao">Data da Reuniao:</label>
                  <input type="date" name="dataReuniao" id="dataReuniao" placeholder="Digite uma Data" onChange={formik.handleChange} value={formik.values.dataReuniao} />
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

export default CreateRetrospectiva;