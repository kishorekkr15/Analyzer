import { useNavigate } from 'react-router-dom'
import '../Styles/ParaAnalyser.css'


const TableRow = ({sentence}) => {
   let type=""
    const a=[',','and']
   const compound=a.every(i=>sentence.includes(i))
    if(compound){
       type="compound"    
    }else{
         type="Simple"
    }
    const navigate=useNavigate()
    const sentenceHandler=()=>{
     navigate('/sentenceAnalyser',{state:{sent:sentence}})
    }

    return (
    <tr>
        <td onClick={sentenceHandler} className="sentence">{sentence}</td>
        <td className='type'>{type}</td>
    </tr>
  )
}
export default TableRow