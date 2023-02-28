import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>product Detail</h1>
      <h3>{product.sku} - {product.names}</h3>
      <p><em>{product.color}</em></p>
      <p><em>{product.category}</em></p>
      <p><em>{product.picture}</em></p>
      <button onClick={onClickingEdit}>Update Product</button>
      <button onClick={()=> onClickingDelete(product.id)}>Close Product</button>
      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ProductDetail;