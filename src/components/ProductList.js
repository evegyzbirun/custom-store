import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.productList.map((product) =>
        <Product
          whenProductClicked={props.onProductSelection}
          names={product.names}
          sku={product.sku}
          color={product.color}
          category={product.category}
          image={product.image}
          id={product.id}
          key={product.id} />
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};

export default ProductList;