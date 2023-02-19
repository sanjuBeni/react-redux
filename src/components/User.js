import React from "react";

export default function User(props) {
  return (
    <div>
      <h2>User Components</h2>
      <h3>Name : {props.data.name}</h3>
    </div>
  );
}
