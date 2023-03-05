import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditProductForm(props) {
  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      names: event.target.names.value,
      sku: event.target.sku.value,
      color: event.target.color.value,
      category: event.target.category.value,
      price: event.target.price.value,
      image: event.target.image.files[0],
      id: product?.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update Product" />
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  onEditProduct: PropTypes.func,
  product: PropTypes.object
};

export default EditProductForm;