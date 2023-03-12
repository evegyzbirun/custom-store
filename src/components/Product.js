import React from "react";
import PropTypes from "prop-types";
import AddToCartButton from "./AddToCartButton";

function Product(props) {
  // const { product, onAdd} = props;
  const [imageSrc, setImageSrc] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  function handleAddToCart(id) {
    const item = { id, quantity: 1 };
    setCartItems([...cartItems, item]);
  }

  React.useEffect(() => {
    if (props.images) {
      const readerPromises = props.images.map((image) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.onerror = () => {
            reject(new Error(`Failed to read image ${image.name}`));
          };
          reader.readAsDataURL(image);
        });
      });
      Promise.all(readerPromises).then((results) => {
        setImageSrc(results);
      });
    }
  }, [props.images]);


  return (
    <React.Fragment>
      <main className="block col-2">
        <div className="row">
          <div onClick={() => props.whenProductClicked(props.id)}>
          <div className="product-images">
              {imageSrc.map((src, index) => (
                <img className="small" key={index} src={src} alt="Product" />
              ))}
            </div>
            <h2>Name: {props.names} </h2>
            <h2>Color: <em>{props.color}</em></h2>
            <h2>Category: <em>{props.category}</em></h2>
            <h2>Product number(sku): <em>{props.sku}</em></h2>
            <h2>Price: <em>${props.price}</em></h2>
            
            <hr />
            
          </div>
        </div>
      </main>
      {!props.hideButton && (
              <div className="">
                <AddToCartButton onClick={() => handleAddToCart(props.id)} />
              </div>
            )}
            
    </React.Fragment>
    
  );
}

Product.propTypes = {
  names: PropTypes.string,
  sku: PropTypes.string,
  color: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  whenProductClicked: PropTypes.func,
  hideButton: PropTypes.bool,
};

export default Product;