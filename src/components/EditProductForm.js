import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProductForm(props) {
  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();

    const images = [];
    for (let i = 0; i < event.target.image.files.length; i++) {
      images.push(event.target.image.files[i]);
    }

    props.onEditProduct({
      names: event.target.names?.value,
      sku: event.target.sku?.value,
      color: event.target.color?.value,
      category: event.target.category?.value,
      price: event.target.price?.value,
      image: images,
      id: product?.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update Product"
        product={product}
        names={product?.names}
        sku={product?.sku}
        color={product?.color}
        category={product?.category}
        price={product?.price}
      />
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  onEditProduct: PropTypes.func,
  product: PropTypes.object
};

export default EditProductForm;
