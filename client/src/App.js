import React from "react";
import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter,Route,Routes} from 'react-router-dom'
const App=()=>{
    return (<div>
        <BrowserRouter>
        <Routes>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
       </Routes>
        </BrowserRouter>
    </div>)
}
export default App