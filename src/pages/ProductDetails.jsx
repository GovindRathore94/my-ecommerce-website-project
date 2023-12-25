import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const url = "https://dummyjson.com/products";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  async function fetchProduct() {
    const res = await fetch(`${url}/${id}`);

    const data = await res.json();
    setProduct(data);
    console.log(data);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {product && (
        <>
          <h5>product</h5>
          <p>Id {product.id}</p>
          <p>{product.title}</p>
          <img src={product.thumbnail} alt="" height={200} />
          <p>Title: {product.description}</p>
        </>
      )}
    </>
  );
}

export default ProductDetails;
