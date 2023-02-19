import React from "react";

export default function Home(props) {
  // console.log("home", props);
  const handleAddCart = () => {
    props.addToCartHandle({ phone: "I-Phone", price: 999 });
  };

  const handleRemoveCart = () => {
    props.removeToCartHandle();
  };
  return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyoFKwj5kjIvmMxi4Cgiwx3SEoWWpVkhJLg&usqp=CAU"
          alt="cart"
          style={{ height: "85px", width: "84px" }}
        />
      </div>
      <h2>Home Component</h2>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTql4o79fbw_kDIGM7tju-j6JnDbfDrKPQxAjcfOPWVi91SmP-3N7l3vyw9cF1MjqnRkIQ&usqp=CAU"
            alt="I-phone"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone </span>
          <span>Price : $999</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={handleAddCart}>Add To Cart</button>
          {"\u00A0"}
          <button onClick={handleRemoveCart}>Remove To Cart</button>
        </div>
      </div>
    </div>
  );
}
