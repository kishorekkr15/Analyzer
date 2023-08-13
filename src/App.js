import { BrowserRouter as Router,Routes,Route  } from "react-router-dom"
import Form from "./Components/Form"
import ParaAnalyser from "./Components/ParaAnalyser"
import SentenceAnalyser from "./Components/SentenceAnalyser"
const App = () => {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Form/>}/>     
        <Route path="/paraAnalyser" element={<ParaAnalyser/>}/>     
        <Route path="/sentenceAnalyser" element={<SentenceAnalyser/>}/>     
      </Routes>
    </Router>
  )
}
export default App