import { useFormik} from 'formik'
import axios from 'axios'


function CadastroRetrospectiva() {

  const formik = useFormik({
      initialValues:{
          titulo:'',
          dataReuniao:''
      }, onSubmit:async (values) =>{
          //const {data} =  await axios.post('https://my-application-teste.herokuapp.com/auth',values)
          console.log(values)
          // console.log(data)

          formik.resetForm()
      }
  })

  return (
      <div>
        <h1>Criar Nova Retrospectiva</h1>
        
          <form onSubmit={formik.handleSubmit}>
              
              <div>
                  <label htmlFor="titulo">Título</label>
                  <input type="text" name="titulo" id="titulo" placeholder="Digite um título" onChange={formik.handleChange} value={formik.values.titulo} />
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

export default CadastroRetrospectiva;