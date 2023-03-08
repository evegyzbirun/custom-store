import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  const { product, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <div className="space-detail">
        <h1>Products: </h1>
        <img className="small" src={URL.createObjectURL(product.image)} alt={product.name} />
        <h2>Name: {product.names} </h2>
        <h2>Color: <em>{product.color}</em></h2>
        <h2>Category: <em>{product.category}</em></h2>
        <h2>Product number(sku): <em>{product.sku}</em></h2>
        <h2>Price: <em>${product.price}</em></h2>
        <button onClick={onClickingEdit}>Update Product</button>
        <button onClick={() => onClickingDelete(product.id)}>Delete Product</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ProductDetail;