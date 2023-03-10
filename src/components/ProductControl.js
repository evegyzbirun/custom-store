import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import EditProductForm from './EditProductForm';
import ProductDetail from './ProductDetail';


class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
      selectedProduct: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }


  handleDeletingProduct = (id) => {
    const newMainProductList = this.state.mainProductList.filter(product => product.id !== id);
    this.setState({
      mainProductList: newMainProductList,
      selectedProduct: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
    

  }

 

  handleEditingProductInList = (productToEdit) => {
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
      mainProductList: editedMainProductList,
      editing: false,
      selectedProduct: null
    });
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({ mainProductList: newMainProductList });
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({ selectedProduct: selectedProduct });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditProductForm ticket={this.state.selectedProduct} onEditProduct={this.handleEditingProductInList} />
      buttonText = "Return to Product List";
    } else if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail
        product={this.state.selectedProduct}
        onClickingDelete={this.handleDeletingProduct}
        onClickingEdit={this.handleEditClick}
         />
      buttonText = "Return to Product List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />;
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = 
      <ProductList onProductSelection={this.handleChangingSelectedProduct} productList={this.state.mainProductList} />;
     buttonText = "Add Product"
      
    }
    return (
      <React.Fragment>
        
            <button onClick={this.handleClick}>{buttonText}</button>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button>
         
      </React.Fragment>
    );
  }
}





export default ProductControl;