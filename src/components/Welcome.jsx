import { useContext } from 'react'
import { QuizContext } from '../context/quizContext'

import './Welcome.css'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='welcome'>
      <h1>Olá, seja bem vindo</h1>
      <p>Clique no botão para começar o jogo</p>
      <p className='atention'>Atenção: não é possível desmarcar a alternativa escolhida</p>
      <button onClick={() => dispatch({type: "PLAY"})}>Começar</button>
    </div>
  )
}

export default Welcome