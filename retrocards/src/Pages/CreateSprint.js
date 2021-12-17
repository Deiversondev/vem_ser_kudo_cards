import { useFormik} from 'formik'
import api from '../api'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Loading from '../components/loading/Loading'

function CreateSprint() {

    const{loading, setLoading}= useContext(AuthContext)

    const createSprint = async (values) => {
        setLoading(true)
        const {data} =  await api.post('/sprint',values)
        setLoading(false)
    }
    
    
    const formik = useFormik({
        initialValues:{
            titulo:'',
            dataInicio:'',
            dataConclusao:'',
        }, onSubmit:async (values) =>{

            await createSprint(values)
            
            formik.resetForm()
        }
    })

    
    return (
        
        <div>
            {loading && <Loading/>}
            {!loading && 
            <div>
            <h1>Criar sprint</h1>

            <form onSubmit={formik.handleSubmit}>
                
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" name="titulo" id="titulo" placeholder="Digite um título" onChange={formik.handleChange} value={formik.values.titulo} />
                </div>

                <div >
                    <label htmlFor="dataInicio">De</label>
                    <input type="date" name="dataInicio" id="dataInicio" placeholder="dataInicio" onChange={formik.handleChange} value={formik.values.dataInicio} />
                </div>

                <div >
                    <label htmlFor="dataConclusao">Para</label>
                    <input type="date" name="dataConclusao" id="dataConclusao" placeholder="dataConclusao" onChange={formik.handleChange} value={formik.values.dataConclusao} />
                </div>

                <div>
                    <button type="submit">Salvar</button>
                    
                </div>

            </form>
            </div>
            }
        </div>
    )
}

export default CreateSprint;
