import React from 'react'
import AddTodoForm from './components/AddTodoForm.jsx'
import TodoList from './components/TodoList.jsx'

const App = () => {
  return (
    <div className='my-todo'>
     {/* header portion */}
     <header className='todo-header'>
       <h1>TODO APP</h1>
     </header>
    
    {/* main portion */}
    <main>
       <section className='todo-section'>
            <AddTodoForm/>
            <TodoList/>
       </section>
    </main>
    
    
    </div>
  )
}

export default App

