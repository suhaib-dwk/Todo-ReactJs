
import './css/main.css'
import Todos from './components/Todos'
import DisplayTodos from './components/displayTodos'

function App() {

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <Todos />
      <DisplayTodos />
    </div>
  )
}

export default App
