import React from "react";
import Basket from "./Basket";
import Header from "./Header";
// import Main from "./Main";
import ProductControl from "./ProductControl";



function App() {


  return (


    <div className="App">
      <Header></Header>
      <div className="row">
        {/* <Main></Main> */}
        {/* <ProductControl></ProductControl> */}
        <Basket></Basket>
      </div>
      <ProductControl></ProductControl>
    </div>



  );
}

export default App;
