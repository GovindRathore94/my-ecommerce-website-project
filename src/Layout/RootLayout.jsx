import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "../component/Navbar.module.css";

function RootLayout() {
  return (
    <>
      <div>
        <nav className={styles.navBar}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
      <main>
        <h2>Landing Page Content</h2>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
