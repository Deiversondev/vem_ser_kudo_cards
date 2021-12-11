import { useFormik} from 'formik'
import api from '../api'
function CreateSprint() {

    const createSprint = async (values) => {
        const {data} =  await api.post('/sprint',values)
        console.log(data)
    }
    const getSprint =async () =>{
        const {data} =  await api.get('/sprint/listar-sprint')
        console.log(data)
        console.log('test')
    }
    
    const formik = useFormik({
        initialValues:{
            titulo:'',
            dataInicio:'',
            dataConclusao:'',
        }, onSubmit:async (values) =>{
            console.log(values)
            createSprint(values)
            formik.resetForm()
        }
    })

    return (
        
        <div>


            <h1>Criar sprint</h1>

            <form onSubmit={formik.handleSubmit}>
                
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" name="titulo" id="titulo" placeholder="Digite seu username" onChange={formik.handleChange} value={formik.values.titulo} />
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
            <button onClick={getSprint} type="submit">Get</button>
        </div>
    )
}

export default CreateSprint
