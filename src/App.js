import './App.css';
import { Route, Routes} from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
      <Routes>
        <Route path={"/"} element={<ProductAll/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/product/:id"} element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
