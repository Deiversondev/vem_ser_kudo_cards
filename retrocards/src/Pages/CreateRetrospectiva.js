import { useFormik} from 'formik'
import axios from 'axios'
import api from '../api'



function CreateRetrospectiva() {

    const addRetrospectiva = async (values) =>{
        const id = localStorage.getItem('idSprint')
        const {data} = await api.post(`/retrospectiva?id=${id}`,values)
        console.log(data)
    
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
  )
}

export default CreateRetrospectiva;