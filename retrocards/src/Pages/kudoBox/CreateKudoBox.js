import { useFormik} from 'formik'
import api from '../../api'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';


function CreateKudoBox() {

  const{loading, setLoading}= useContext(AuthContext);

  const idSprint = localStorage.getItem('idSprint'); 

  const validation = Yup.object().shape({

    titulo: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo Obrigatório'),

    dataLeitura: Yup.date()
      .required('Campo Obrigatório'),

  });

  const createKudobox = async (values) => {
    
    setLoading(true)
  try{
    const {data} =  await api.post(`/kudobox?id=${idSprint}`,values)
    setLoading(false)
    alert('Nova kudo box criada com sucesso!')
    window.history.back()
  }
  catch{
    alert('Houve uma falha nos servidores!')
    window.history.back()
  }

    
  }


  return (
    <div>

      {loading && <Loading/>}
      {!loading && 
      <div>
        <h1>Criar Nova Kudo Box</h1>
      
          <Formik
            initialValues={{
              titulo:'',
              dataLeitura:'',
              statusKudoBoxEntity:'CRIADO'
            }}
            validationSchema={validation}
            onSubmit={values => {

              createKudobox(values);

            }}
            >
            {({ errors, touched }) => (
              <Form>

                <div>
                Título: <Field name="titulo" id="titulo"/>
                {errors.titulo && touched.titulo ? (
                  <div>{errors.titulo}</div>
                ) : null}
                </div>

                <div>
                Data da Leitura: <Field name="dataLeitura" id="dataLeitura" type= "date"/>
                {errors.dataLeitura && touched.dataLeitura ? (
                  <div>{errors.dataLeitura}</div>
                ) : null}
                </div>

                <button type="submit">Submit</button>

              </Form>
            )}
            </Formik>   
        </div>
      }
    </div>
  )
}

export default CreateKudoBox;