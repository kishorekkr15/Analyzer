import { useLocation } from 'react-router-dom'
import Tabledata from './Tabledata'
import '../Styles/ParaAnalyser.css'

const ParaAnalyser = () => {
  const { state } = useLocation()
  const paragraph = state.para
  return (
    <div className='container'>
      <p>{paragraph}</p>
      <Tabledata info={paragraph} className="tableContainer"/>
    </div>

  )
}
export default ParaAnalyser