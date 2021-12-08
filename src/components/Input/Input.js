import React, {useState} from 'react'
import { v4 } from 'uuid'
import "./input-style.css"
function Input({setTodos, todos}) {

    const [todo, setTodo] = useState("")

    const addTodo =()=>{
        if(!todo) return
        let updateTodos =[
            ...todos,
            {
                id:v4(),
                task:todo,
                completed:false
            }
        ]

        setTodos(updateTodos)
        setTodo("")
    }

    return (
        <div className ="input-container">
            <input 
            className="input" 
            value={todo} 
            onChange={(e)=>setTodo(e.target.value)}
            placeholder="Add a new task" />
            <button 
            className="add-btn" 
            onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input
