import { useState, useEffect } from "react";
import Product from "../component/Product";

// This is Products Page

// Data API URL
const endPoint = "https://dummyjson.com/products";

function Products() {
  const [products, setProducts] = useState(null);

  async function fetchProducts() {
    const res = await fetch(endPoint);
    const data = await res.json();
    setProducts(data.products);
    console.log(data.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        {products &&
          products.map((product) => {
            return (
              <div>
                <Product
                  key={product.id}
                  title={product.title}
                  id={product.id}
                  thumbnail={product.thumbnail}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Products;
