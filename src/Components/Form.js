import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import '../Styles/Home.css'

const Form = () => {
    const [data, setData] = useState({ paragraph: "" })

    const navigate = useNavigate()
    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('paraAnalyser', { state: { para: data.paragraph } })
    }
    return (
        <div className="App">
            <form onSubmit={submitHandler}>
                <label>Enter the paragraph</label>
                <div>
                <textarea name="paragraph" type="text" onChange={handleChange} value={data.paragraph} rows={14} cols={80}  placeholder="Your text goes here....."/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Form