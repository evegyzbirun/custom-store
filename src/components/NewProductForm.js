import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewProductForm(props) {

  function handleNewProductFromSubmission(event) {
    event.preventDefault();
    const images = [];
    for (let i = 0; i < event.target.image.files.length; i++) {
      images.push(event.target.image.files[i]);
    }
    props.onNewProductCreation({
      names: event.target.names.value,
      sku: event.target.sku.value,
      color: event.target.color.value,
      category: event.target.category.value,
      price: event.target.price.value,
      image: images,
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
