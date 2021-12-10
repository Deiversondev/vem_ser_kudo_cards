import { useFormik} from 'formik'
import axios from 'axios'

function CreateSprint() {
    
    const formik = useFormik({
        initialValues:{
            titulo:'',
            dataInicio:'',
            dataConclusao:'',
        }, onSubmit:async (values) =>{
        //    const {data} =  await axios.post('https://my-application-teste.herokuapp.com/auth',values)
            console.log(values)
            // console.log(data)

            formik.resetForm()
        }
    })

    return (
        <div>
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
        </div>
    )
}

export default CreateSprint
