import { useFormik} from 'formik';
import { useContext } from 'react';
import api from '../../api';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/loading/Loading'

function Login() {
    
  const { setAuth } = useContext(AuthContext)
  const{loading, setLoading}= useContext(AuthContext)


  const handleLogin = async (values) => {

    setLoading(true)
    const {data} =  await api.post('/auth',values)
    setLoading(false)

    localStorage.setItem('token',data)
    api.defaults.headers.common['Authorization'] = data;
    
    window.location.href = '/initialpage'
    setAuth(true)
  }

  const formik = useFormik({
    initialValues:{
      usuario:'',
      senha:''
    }, onSubmit:async (values) =>{
      await handleLogin(values)
      console.log(values)
    

      formik.resetForm()
    }
  })

  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
        <h1>Login</h1>

        <form onSubmit={formik.handleSubmit}>
            
          <div>
            <label htmlFor="usuario">Usuario</label>
            <input type="text" name="usuario" id="usuario" placeholder="Digite seu username" onChange={formik.handleChange} value={formik.values.usuario} />
          </div>

          <div >
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" placeholder="Digite sua senha" onChange={formik.handleChange} value={formik.values.senha} />
          </div>

          <div>
            <button type="submit">Login</button>
          </div>

          </form>
        </div>
        } 
    </div>
  )
}

export default Login;