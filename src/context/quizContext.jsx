import { useReducer } from "react";
import { createContext } from "react";
import questions from '../data/questions'

const STAGES = ['WELCOME', 'PLAY', 'GAMEOVER']

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  isSelected: false
}

const quizReducer = (state, action) => {
  switch (action.type) {
    case "PLAY":
      return {
        ...state,
        gameStage: STAGES[1]
      }
    case "WELCOME":
      return initialState
    case "NEXT_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        isSelected: false
      };
    }
    case "CHECK_ANSWER": 
      if(state.isSelected) return state
      const answer = action.payload.answer;
      const option = action.payload.option;

      let i = 0

      if(answer === option) i = 1

      return{
        ...state,
        score: state.score + i,
        isSelected: true
      }
    
    case "SHUFFLE": 
      const shuffle = questions.sort(function () {
        return Math.random() - 0.5;
      });

      return{
        ...state,
        questions: shuffle
      }
    
  }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};