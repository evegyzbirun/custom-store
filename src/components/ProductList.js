import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  return (

    <main className="block col-2">
      <div>Product List(main)</div>
      <hr />
      <div className="row">
        {props.productList.map((product) =>
          <Product
            whenProductClicked={props.onProductSelection}
            names={product.names}
            sku={product.sku}
            color={product.color}
            category={product.category}
            price={product.price}
            image={product.image}
            id={product.id}
            key={product.id} />
        )}
      </div>
    </main>

  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};

export default ProductList;