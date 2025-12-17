import { QuizProvider } from "./context/QuizProvider"
import { Quiz } from './Quiz'
import "./style/index.scss"
function App() {

  return (
    <QuizProvider >
      <Quiz />
    </QuizProvider>
  )
}

export default App
