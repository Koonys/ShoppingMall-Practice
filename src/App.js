import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes} from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import {useEffect, useState} from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {

    const [authenticate, setAuthenticate] = useState(false);
    useEffect(() => {
        console.log("로그인 여부",authenticate)
    }, [authenticate]);
  return (
    <div className="App">
        <Navbar authenticate={authenticate} navAuthenticate={setAuthenticate}></Navbar>
      <Routes>
        <Route path={"/"} element={<ProductAll/>}></Route>
        <Route path={"/login"} element={<Login setAuthenticate={setAuthenticate}/>}></Route>
        <Route path={"/product/:id"} element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
