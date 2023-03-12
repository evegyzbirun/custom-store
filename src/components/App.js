import React, {  } from "react";
import Basket from "./Basket";
import Header from "./Header";

import ProductControl from "./ProductControl";
// import ProductList from './ProductList';



function App() {
  // const { products } = ProductList;
  // const [cartItems, setCartItems] = useState([]);
  // const onAdd = (product) => {
  //   const exit = cartItems.find(x => x.id === product.id);
  //   if(exit) {
  //     setCartItems(cartItems.map(x => x.id === product.id ? {...exit, qty: exit.qty +1 } :x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, {...products, qty: 1}])
  //   }
  // }


  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        {/* <Main></Main> */}
        {/* <ProductControl></ProductControl> */}
        <Basket 
        // onAdd={onAdd} cartItems={cartItems}
        ></Basket>
      </div>
      <ProductControl></ProductControl>
      {/* <ProductList 
      onAdd={onAdd} products={products}></ProductList> */}
    </div>



  );
}

export default App;
