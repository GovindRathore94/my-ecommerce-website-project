import React from "react";
import { Link } from "react-router-dom";

//This is Component

function Product({ id, title }) {
  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        width: "200px",
        border: "1px solid blue",
        borderRadius: "1rem",
        textAlign: "center",
      }}>
      <Link to={id.toString()}>
        <h3>{title}</h3>
        {/* <img src={thumbnail} alt="thumbnail" height={80} /> */}
      </Link>
      <p>{id}</p>
    </div>
  );
}

export default Product;
