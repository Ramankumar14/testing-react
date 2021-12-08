import {render,screen, fireEvent} from "@testing-library/react"
import Todo from "../Todo"
import { BrowserRouter } from "react-router-dom"


const MokeTodo =()=>{
    return(
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}


const addTask =(tasks)=>{
    const inputElement = screen.getByPlaceholderText(/Add a new task/i)
    const buttonElement = screen.getByRole("button",{name:/Add/i})
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target:{value:task}})
        fireEvent.click(buttonElement)
    });
}

it("should be able to type into input",()=>{
    render(
        <MokeTodo/>
    )

    addTask(["Go Home"])
    const divElement = screen.getByText(/Go Home/i)
    expect(divElement).toBeInTheDocument()
})

it("should render multiple item",()=>{
    render(
        <MokeTodo/>
    )
    addTask(["Go Home", "Go Home","Go Home"])
    const divElement = screen.getAllByText(/Go Home/i)
    expect(divElement.length).toBe(3)
})

it("task should not be completed initial render", ()=>{
    render(
        <MokeTodo/>
    )
    addTask(["Go Home"])
    const divElement = screen.getByText(/Go Home/i)
    expect(divElement).not.toHaveClass("todo-item-active")
})

it("task should have completed when click",()=>{
    render(
        <MokeTodo/>
    )
    addTask(["Go Home"])
    const divElement = screen.getByText(/Go Home/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
})