import React from "react";
import Product from "./Product";
// import Category from "./Category";
import PropTypes from "prop-types";

function ProductList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.productList.map((product) =>
        <Product 
          whenTicketClicked={props.onProductSelection}
          names={product.names}
          sku={product.location}
          color={product.color}
          category={product.category}
          picture={product.picture}
          id={product.id}
          key={product.id}/>
      )}
    </React.Fragment>
  ); 
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};
