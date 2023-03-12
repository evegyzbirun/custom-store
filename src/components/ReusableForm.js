import React, { useState } from 'react';
import PropTypes from "prop-types";
import Product from './Product';

function ReusableForm(props) {
  const [product, setProduct] = useState(props.product || {});
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value ? value : prevProduct[name],
    }));
  };

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFile(files);
  };

  return (
    <React.Fragment>
      <form className='form' onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          defaultValue={product.names || ''}
          placeholder='Product Name'
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='sku'
          defaultValue={product.sku || ''}
          placeholder='sku'
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='color'
          defaultValue={product.color || ''}
          placeholder='color'
          onChange={handleInputChange}
        />
        <input
          type='option'
          name='category'
          defaultValue={product.category || ''}
          placeholder='category'
          onChange={handleInputChange}
        />
        <input
          type='number'
          name='price'
          defaultValue={product.price || ''}
          placeholder='price'
          onChange={handleInputChange}
        />

        <input
          type='file'
          name='image'
          accept='image/*'
          multiple
          onChange={handleFileInputChange}
        />

        <button type='submit'>{props.buttonText}</button>
      </form>
      <form id='image-upload'></form>
      {product.names && (
        <Product images={selectedFile} hideButton={true} {...product} />
      )}
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  product: PropTypes.object,
};

export default ReusableForm;

