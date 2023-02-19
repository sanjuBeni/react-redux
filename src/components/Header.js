import React from "react";

export default function Header(props) {
  //   console.log("Header", props.cartStateData.length);
  return (
    <div>
      <h2>
        Header Item Add{" "}
        {props.cartStateData.length > 0 ? props.cartStateData.length : null}
      </h2>
    </div>
  );
}
