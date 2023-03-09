import React from "react";

function Header() {
  return (
    <React.Fragment>
      <header className="row block center">
        <div>
          <h1>Store</h1>
          <a href="#/">
            <h1>Shoping Cart</h1>
          </a>
        </div>
        <div>
          <a href="#/cart">Cart</a> <a href="#/signin">SignIn</a>
        </div>
      </header>

    </React.Fragment>
  );
}

export default Header;