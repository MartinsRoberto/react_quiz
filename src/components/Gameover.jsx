import React, { useContext } from 'react'
import { QuizContext } from '../context/quizContext'

import './Gameover.css'

const Gameover = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div className='gameover'>
      <h1>Fim de jogo</h1>
      <p>Parabéns, você finalizou as perguntas</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length}</p>
      <button onClick={() => dispatch({type: "WELCOME"})}>Jogar novamente</button>
    </div>
  )
}

export default Gameover