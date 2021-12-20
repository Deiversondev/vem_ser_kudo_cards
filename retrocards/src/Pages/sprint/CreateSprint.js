import { useFormik} from 'formik';
import api from '../../api';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/loading/Loading';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

function CreateSprint() {

  const{loading, setLoading}= useContext(AuthContext);

  const validation = Yup.object().shape({

    titulo: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo Obrigatório'),

    dataInicio: Yup.date()
      .required('Campo Obrigatório'),
    
      dataConclusao: Yup.date()
      .required('Campo Obrigatório'),

  });

  const createSprint = async (values) => {
    setLoading(true);
    const {data} =  await api.post('/sprint',values);
    setLoading(false);
    alert('Nova sprint criada com sucesso!')
    window.history.back()
  }
    
    
  return (
      
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
      <h1>Criar sprint</h1>

      <Formik
      initialValues={{
        titulo:'',
        dataInicio:'',
        dataConclusao:''
      }}
      validationSchema={validation}
      onSubmit={values => {

        createSprint(values);

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
          Data de Início: <Field name="dataInicio" id="dataInicio" type= "date"/>
          {errors.dataInicio && touched.dataInicio ? (
            <div>{errors.dataInicio}</div>
          ) : null}
          </div>

          <div>
          Data de Conclusão: <Field name="dataConclusao" id="dataConclusao" type= "date"/>
          {errors.dataConclusao && touched.dataConclusao ? (
            <div>{errors.dataConclusao}</div>
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

export default CreateSprint;
