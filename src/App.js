import React from 'react'
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";

function App() {
    const [todos, setTodos] = React.useState([
        {id:1, comleted: false, title: 'Купить хлеб'},
        {id:2, comleted: false, title: 'Купить масло'},
        {id:3, comleted: false, title: 'Купить молоко'},
    ])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo =>{
               if (todo.id ===id){
                   todo.comleted = !todo.comleted
               }
                return todo
            })
        )
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            comleted: false
        }]))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    return (
        <Context.Provider value={{removeTodo: removeTodo}}>
            <div className='wrapper'>
                <h1>react</h1>
                <AddTodo onCreate={addTodo}/>
                <TodoList todos={todos} onToggle={toggleTodo}/>
            </div>
        </Context.Provider>
    )
}
export default App