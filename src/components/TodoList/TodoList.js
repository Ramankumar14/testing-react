import React from 'react'
import "./todolist-style.css"
function TodoList({ setTodos,todos}) {
    const updateTask =(id)=>{
        let updatedtask = todos.map(todo=>{
            if(todo.id ===id){
                todo.completed =!todo.completed
                return todo
            }else{
                return todo
            }
        })
        setTodos(updatedtask)
    }
    const completedtasks =()=>{
        let count =0
        todos.forEach(todo=>{
            if(!todo.completed) count++
        })
        return  count
    }

    
    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div>
                    {
                        todos.map((todo, index)=>(
                            <div key={todo.id} className={`todo-item ${todo.completed && "todo-item-active"}`} 
                            onClick={() => updateTask(todo.id)} >
                                {todo.task}
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default TodoList
