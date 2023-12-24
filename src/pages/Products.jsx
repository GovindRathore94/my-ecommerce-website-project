import { useState, useEffect } from "react";
import Product from "../component/Product";

// This is Products Page

function Products() {
  const [products, setProducts] = useState(null);

  const endPoint = "https://dummyjson.com/products";

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
