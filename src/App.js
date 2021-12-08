import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import UserPage from "./pages/Users/UserPage"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<TodoPage/>}/>
       <Route path="/users" element={<UserPage/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
