import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewProductForm(props) {

  function handleNewProductFromSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      names: event.target.names.value, 
      sku: event.target.sku.value, 
      color: event.target.color.value,
      category: event.target.category.value,
      images: event.target.images.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewProductFromSubmission}
        buttonText="Add Product!" />
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;