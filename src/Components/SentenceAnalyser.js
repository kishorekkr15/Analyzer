import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import '../Styles/SentenceAnalyser.css'

const SentenceAnalyser = () => {
  const { state } = useLocation()
  const sen = state.sent
  const word = sen.split(" ").map((wo) => wo.replace(/,/g, ""))
  const [mean, setMean] = useState([])
  const [error, setError] = useState("")
  const [selectWord,setSelectWord]=useState("")

  const handler = async (w) => {
    try {
      setError("")
      const details = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${w}`)
      const def = details.data[0].meanings
      setSelectWord(w)
      setMean(def)
    } catch (error) {
      setError("Sorry, word is not found in database....")
    }
  }
  console.log(mean)
  return (
    <div className='sencontainer' >
      <h3 className='indSentence'>{sen}</h3>
      <div className='group'>
        <div className='words'>
          <p>
            {word.map((w, i) => (
              <li onClick={() => handler(w)} key={Math.random()}> {w}</li>
            ))}
          </p>
        </div>
        <div>
          {error ? (
            <div className='meanings errors'>
              <p>{error}</p>
            </div>
          ) : (
            <div className='meanings'>
            <h2>{selectWord}</h2>
              {mean.map((data) => {
                return (
                  <div>
                    <div>
                      <h3 className='noun'>{data.partOfSpeech}</h3>
                      {
                        data.definitions.map((define) => {
                          return (
                            <div key={Math.random()}>
                              <li className='define'>{define.definition}</li>
                              {define.example && (
                                <p className='define example'>
                                  <span>Example :</span>
                                  {define.example}
                                </p>
                              )}
                            </div>
                          )
                        })
                      }
                    </div>
                    {data.synonyms.length > 0 && (
                      <div className='syn'>
                        <h5>Synonyms</h5>
                        <div>
                          {data.synonyms.map((syn) => {
                            return (
                              <span>{syn}</span>
                            )
                          })}
                        </div>
                      </div>
                    )}
                    {data.antonyms.length > 0 && (
                      <div className='syn'>
                        <h5>Antonyms</h5>
                        <div>
                          {data.antonyms.map((ant) => {
                            return (
                              <span>{ant}</span>
                            )
                          })}
                        </div>
                      </div>
                    )}

                  </div>
                )

              })}
            </div>
          )}
        </div>

      </div>
    </div>

  )
}
export default SentenceAnalyser