import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <main className="block col-2">
      <h2>Products List(main)</h2>
      <hr />
      <div className="row">
        {props.productList.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <Product
                whenProductClicked={() => props.onProductSelection(product.id)}
                names={product.names}
                sku={product.sku}
                color={product.color}
                category={product.category}
                price={Number(product.price)}
                images={product.image && product.image.length > 0 ? [product.image[0]] : []}
                id={product.id}
              />
            </React.Fragment>
          );
        })}
      </div>
    </main>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};

export default ProductList;
