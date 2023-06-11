import "./styles.css";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Product from "./components/Product";
import Error from "./components/Error";
import Protect from "./protect/Protect";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Link to="/"> Login </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/home"> Home </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/about"> About </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/product/:33"> Product </Link>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route element={<Protect />}>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/product/:id" element={<Product />} />
              <Route exact path="/about" element={<About />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

/**
 
The main diffrences between element and component attributes;
 First:It will be easier to make the switch to React Router v6 
 if you upgrade to v5.1 Second:element attribute gives oppurtunity to 
 use props but in component attribute you cant.

when using component attribute within Route tag, you can simply write your 
component name in curly braces doesn't need to add tag.ex:(component={...}).

<Routes>
 <Route path='/home' element={<Home prop={"somedata"}/>}/>
 <Route path='/about' Component={About} >
</Routes>

 */
