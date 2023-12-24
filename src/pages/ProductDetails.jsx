import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  //   const url = "https://dummyjson.com/products";

  //   async function fetchProduct() {
  //     const res = await fetch(`${url} ${id}`);
  //     const data = await res.json();
  //     console.log(data);
  //     setProduct(data);
  //   }

  //     useEffect(() => {
  //       fetchProduct();
  //     }, []);

  return (
    <>
      {product && (
        <div
          style={{
            background: "lightblue",
            textAlign: "center",
            width: "500px",
            height: "250px",
            borderRadius: "10px",
            margin: "0 auto",
            padding: "1rem",
          }}>
          <p>Id: {product.id}</p>
          <h3>Products: {product.title}</h3>
          <img src={product.thumbnail} alt="" height={100} />
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
