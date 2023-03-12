import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function chunk(arr, size) {
  return arr.reduce((chunks, el, i) => (i % size ? chunks[chunks.length - 1].push(el) : chunks.push([el])) && chunks, []);
}

function ProductList(props) {
  const rows = chunk(props.productList, 4);

  return (
    <main className="block">
      <h2>Products List(main)</h2>
      <hr />
      {rows.map((row, index) => (
        <div className="row" key={index}>
          {row.map((product) => (
            <React.Fragment key={product.id}>
              <Product
                whenProductClicked={() => props.onProductSelection(product.id)}
                names={product.names}
                sku={product.sku}
                color={product.color}
                category={product.category}
                price={product.price}
                images={product.image && product.image.length > 0 ? [product.image[0]] : []}
                id={product.id}
              />
            </React.Fragment>
          ))}
        </div>
      ))}
    </main>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};

export default ProductList;
