import { useFormik} from 'formik';
import api from '../../api';
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';


function CreateRetrospectiva() {

  const{loading, setLoading}= useContext(AuthContext);

  const validation = Yup.object().shape({

    tituloRetrospectiva: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo Obrigatório'),

    dataReuniao: Yup.date()
      .required('Campo Obrigatório'),

  });

  const addRetrospectiva = async (values) =>{

      const id = localStorage.getItem('idSprint')
      setLoading(true)
      const {data} = await api.post(`/retrospectiva?id=${id}`,values)
      setLoading(false)
      alert('Nova retrospectiva criada com sucesso!')
      window.history.back()
    }


  return (

    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
        <h1>Criar Nova Retrospectiva</h1>

        <Formik
          initialValues={{
            tituloRetrospectiva:'',
            dataReuniao:''
          }}
          validationSchema={validation}
          onSubmit={values => {

            addRetrospectiva(values);
            

          }}
          >
          {({ errors, touched }) => (
            <Form>

              <div>
              Título: <Field name="tituloRetrospectiva" id="tituloRetrospectiva"/>
              {errors.tituloRetrospectiva && touched.tituloRetrospectiva ? (
                <div>{errors.tituloRetrospectiva}</div>
              ) : null}
              </div>

              <div>
              Data da Reunião: <Field name="dataReuniao" id="dataReuniao" type= "date" />
              {errors.dataReuniao && touched.dataReuniao ? (
                <div>{errors.dataReuniao}</div>
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

export default CreateRetrospectiva;