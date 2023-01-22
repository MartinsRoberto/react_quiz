import { useContext, useEffect } from 'react'
import Gameover from './components/Gameover'
import Questions from './components/Questions'
import Welcome from './components/Welcome'
import { QuizContext } from './context/quizContext'

import './App.css'

const App = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: 'SHUFFLE'})
  }, [])
  return (
    <div className='container'>
      {quizState.gameStage === 'WELCOME' && <Welcome/>}
      {quizState.gameStage === 'PLAY' && <Questions/>}
      {quizState.gameStage === 'GAMEOVER' && <Gameover/>}
      
    </div>
  )
}

export default App