import {render,screen, fireEvent} from "@testing-library/react"
import UserList from "../UserList"
import { BrowserRouter } from "react-router-dom"


const MokeUserList = ()=>{
    return(
        <BrowserRouter>
            <UserList/>
        </BrowserRouter>
    )
}

describe("UserList", ()=>{
    beforeEach(()=>{
        jest.mock("../../../__mocks__/axios")
    })
    it("should fetch and render element", async ()=>{
        render(
            <MokeUserList/>
        )
        //const userListDivElement = await screen.findByTestId(`user-item-0`)
        const userListDivElement = await screen.findByTestId("user-item-0")

        expect(userListDivElement).toBeInTheDocument()
    })
   
})


