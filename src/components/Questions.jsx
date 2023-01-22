import { useContext } from 'react'
import { QuizContext } from '../context/quizContext'
import Options from './Options'

import './Questions.css'

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    })
  }

  console.log(quizState.score)
  return (
    <div className='questions'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h3>{currentQuestion.question}</h3>
      <ul className="options">
        {currentQuestion.options.map((option) => (
          <Options key={option} text={option} selectOption={() => onSelectOption(option)}/>
        ))}
      </ul>
      {quizState.isSelected && <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Continuar</button>}
      
    </div>
  )
}

export default Questions