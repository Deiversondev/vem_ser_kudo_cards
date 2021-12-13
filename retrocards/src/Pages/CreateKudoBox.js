import { useFormik} from 'formik'
import axios from 'axios'


function CreateKudoBox() {

  const setSprintId = (id) => {
    localStorage.setItem('idSprint',id)
    window.location.href = '/sprint'
  } 

  const formik = useFormik({
    initialValues:{
      titulo:'',
      dataLeitura:''
    }, onSubmit:async (values) =>{
      //const {data} =  await axios.post('https://my-application-teste.herokuapp.com/auth',values)
      console.log(values)
      // console.log(data)

      formik.resetForm()
    }
  })

  return (
    <div>
      <h1>Criar Nova Kudo Box</h1>
      
      <form onSubmit={formik.handleSubmit}>
          
        <div>
          <label htmlFor="tituloKudoBox">Título</label>
          <input type="text" name="tituloKudoBox" id="tituloKudoBox" placeholder="Digite um título" onChange={formik.handleChange} value={formik.values.tituloKudoBox} />
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
  )
}

export default CreateKudoBox;