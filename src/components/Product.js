import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  const [imageSrc, setImageSrc] = React.useState(null);

  React.useEffect(() => {
    if (props.image) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(props.image);
    }
  }, [props.image]);



  return (
    <React.Fragment>
      <div onClick={() => props.whenProductClicked(props.id)}>
        <h3>{props.names} - {props.sku}</h3>
        <p><em>{props.color}</em></p>
        <p><em>{props.category}</em></p>
        {imageSrc && <img src={imageSrc} alt="Product" />}
        

        <hr />
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  names: PropTypes.string,
  sku: PropTypes.string,
  color: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.instanceOf(File),
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
}

export default Product;