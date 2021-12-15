import { useFormik } from "formik"; 

function Emails (){
  const formik = useFormik({

    initialValues:{
      emails:'',
      
    }, onSubmit:async (values) =>{
      
      // await funcao(values)

      formik.resetForm()
    }
  })

  return(
    <div>

      <h1>Página Emails</h1>
    
      <h1>Adicionar E-mails</h1>
      
      <form onSubmit={formik.handleSubmit}>
          
        <div>
          <label htmlFor="emails">Para</label>
          <input type="text" name="emails" id="emails" placeholder="Digite um título" onChange={formik.handleChange} value={formik.values.emails} />
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>

      </form>
      
    </div>
  )
}
export default Emails;