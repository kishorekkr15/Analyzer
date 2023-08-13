import TableRow from "./TableRow"
import '../Styles/ParaAnalyser.css'

const Tabledata = ({info}) => {
    const indData=info.split('.').map((sen)=>(
        sen.replace(/“|”/g,'').trim().replace(/\n/g," ")
       )).filter((a)=>a!=='')

//    const data=indData
    // const final=data
    // console.log(indData)
  return (
    <table>
        <tr className="headings">
            <th>sentences</th>
            <th>Type</th>
        </tr>
        {indData.map((line)=>(
            <TableRow sentence={line} key={line}/>
        ))}
        
    </table>
  )
}
export default Tabledata