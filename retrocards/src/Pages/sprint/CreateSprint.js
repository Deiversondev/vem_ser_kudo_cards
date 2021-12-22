import { useFormik} from 'formik';
import api from '../../api';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/loading/Loading';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from '../sprint/CreateSprint.module.css'

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
   try{
    const {data} =  await api.post('/sprint',values);
    setLoading(false);
    alert('Nova sprint criada com sucesso!')
   }
   catch{
    setLoading(false);
     alert('Data de conclusão não pode ser antes da data de inicio! Verifique os dados inseridos, se foram inseridos corretamente , houve uma falha nos servidores , tente novamente mais tarde')
   }
    window.history.back()
  }
    
    
  return (
      
    <div className={styles.createSprint}>
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

          <div >
          Título: <Field name="titulo" id="titulo"/>
          {errors.titulo && touched.titulo ? (
            <div className={styles.erro}>{errors.titulo}</div>
          ) : null}
          </div>

          <div>
          Data de Início: <Field name="dataInicio" id="dataInicio" type= "date"/>
          {errors.dataInicio && touched.dataInicio ? (
            <div className={styles.erro}>{errors.dataInicio}</div>
          ) : null}
          </div>

          <div>
          Data de Conclusão: <Field name="dataConclusao" id="dataConclusao" type= "date"/>
          {errors.dataConclusao && touched.dataConclusao ? (
            <div className={styles.erro}>{errors.dataConclusao}</div>
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
