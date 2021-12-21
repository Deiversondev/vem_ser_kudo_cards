import { Formik, Form, Field} from 'formik';
import { useContext } from 'react';
import api from '../../api';
import { AuthContext } from '../../context/AuthContext';
import * as Yup from 'yup';
import Loading from '../../components/loading/Loading';
import styles from './Login.module.css';

function Login() {
    
  const { setAuth } = useContext(AuthContext)
  const{ loading, setLoading }= useContext(AuthContext)


  const handleLogin = async (values) => {

    setLoading(true)
    try{
      const {data} =  await api.post('/auth',values)
      localStorage.setItem('token',data)
      api.defaults.headers.common['Authorization'] = data;
    }
    catch{
      alert('Verifique se digitou sua informação de login corretamente. Caso o erro persista, tente novamente mais tarde')
    }
    setLoading(false)

   
    
    window.location.href = '/initialpage'
    setAuth(true)
  }

  const validation = Yup.object().shape({
    usuario: Yup.string()
      .min(6, 'Mínimo 6 caracteres')
      .max(12, 'Máximo 12 caracteres')
      .required('Campo Obrigatório'),
    senha: Yup.string()
      // .min(6, 'Mínimo 6 caracteres')
      .max(12, 'Máximo 12 caracteres')
      .required('Campo Obrigatório'),
      // .matches(
      // /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[$&@#])[0-9a-zA-Z$&@#]{6,}$/,
      // 'Necessário um caractere especial, uma letra maiúscula, uma letra minúscula, um número e no mínimo 6 caracteres'
    //),
  });

  return (

    <div>
      {loading && <Loading/>}
      {!loading &&
        <div>
          <h1>Login</h1>
          <Formik
            initialValues={{
              usuario: '',
              senha: ''
            }}
            validationSchema={validation}
            onSubmit={values => {
              console.log(values);
              handleLogin(values)
            }}
          >
            {({ errors, touched }) => (
        
            <Form>

            <div> 
              Usuário:<Field name="usuario" /> 
            {errors.usuario && touched.usuario ? (
              <div>{errors.usuario}</div>
            ) : null}
            </div>
            <div>
            Senha: <Field name="senha" type = "password" /> 
            {errors.senha && touched.senha ? (
              <div>{errors.senha}</div>
            ) : null}
            </div>
            
            <button type="submit" >Submit</button>
            </Form>
            )}
          </Formik>
        </div>
      }
    </div>

  )
  
}

export default Login;