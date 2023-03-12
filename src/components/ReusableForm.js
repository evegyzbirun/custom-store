import React, { useState } from 'react';
import PropTypes from "prop-types";
import Product from './Product';

function ReusableForm(props) {
  const [selectedFile, setSelectedFile] = useState(null);

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
          placeholder='Product Name'
          
        />
        <input
          type='text'
          name='sku'
          placeholder='sku' />
        <input
          type='text'
          name='color'
          placeholder='color' />
        <input
          type='option'
          name='category'
          placeholder='category' />
        <input
          type='number'
          name='price'
          placeholder='price' />
        <input
          type='file'
          name='image'
          accept='image/*'
          multiple
          onChange={handleFileInputChange} />

        <button type='submit'>{props.buttonText}</button>
      </form>
      <form id='image-upload'>

      </form>
      <Product image={selectedFile} hideButton={true} />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;

