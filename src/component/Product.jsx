import React from "react";
import { Link } from "react-router-dom";

//This is Component

function Product({ id, title, thumbnail }) {
  return (
    <div>
      {/* <p>ID: {id}</p> */}
      <Link to={id}>
        {/* <h1>Product: {title}</h1> */}
        <div
          style={{
            margin: "1rem",
            padding: "1rem",
            width: "200px",
            border: "1px solid blue",
            borderRadius: "1rem",
          }}>
          <p>{title}</p>
          <p>{id}</p>
          <img src={thumbnail} alt="thumbnail" height={80} />
        </div>
      </Link>
    </div>
  );
}

export default Product;
