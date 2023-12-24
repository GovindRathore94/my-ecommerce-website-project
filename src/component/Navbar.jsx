import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
  Route,
} from "react-router-dom";

import {
  Home,
  Product,
  About,
  Contact,
  ErrorPage,
  ProductDetails,
} from "../pages";
import RootLayout from "../Layout/RootLayout";
// Step 2 : Create Router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function Navbar() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Navbar;
