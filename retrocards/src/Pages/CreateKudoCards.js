import { useFormik} from 'formik'
import axios from 'axios'

function CreateKudoCards() {
    const formik = useFormik({
        initialValues:{
            titulo:'',
            de:'',
            para:'',
            descricao:''
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
                    <label htmlFor="de">De</label>
                    <input type="text" name="de" id="de" placeholder="de" onChange={formik.handleChange} value={formik.values.de} />
                </div>

                <div >
                    <label htmlFor="para">Para</label>
                    <input type="text" name="para" id="para" placeholder="para" onChange={formik.handleChange} value={formik.values.para} />
                </div>

                <div >
                    <label htmlFor="descricao">Para</label>
                    <textarea  name="descricao" id="descricao" placeholder="descricao" onChange={formik.handleChange} value={formik.values.descricao} cols="30" rows="10"></textarea>
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>

            </form>
        </div>
    )
}

export default CreateKudoCards;
