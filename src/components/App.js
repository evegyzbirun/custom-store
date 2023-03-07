import React from "react";
import Basket from "./Basket";
import Header from "./Header";
import ProductControl from "./ProductControl";
import './App.css'


function App() {
  return (


    <div className="App">
      <Header></Header>
      <div className="row"></div>
      <ProductControl></ProductControl>
      <Basket></Basket>
    </div>



  );
}

export default App;
