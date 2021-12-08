import React,{useState} from 'react'
import TodoList from '../TodoList/TodoList'
import Header from "../Header/Header"
import Input from '../Input/Input'
import "./todo-style.css"
function Todo() {
    const [todos, setTodos] = useState([])
    return (
        <div className="todo">
            <Header title="Todo"/>
            <Input setTodos={setTodos} todos={todos}/>
            <TodoList setTodos={setTodos} todos={todos}  />
        </div>
    )
}

export default Todo
