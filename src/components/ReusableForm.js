import React from "react";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";


function ReusableForm(props) {

  const {register} = useForm()


  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Product Name' />
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
          ref={register}
          type='file'
          name='image' />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;