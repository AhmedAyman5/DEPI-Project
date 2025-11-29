import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGem, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../context/cartContext/useCart";
import "./Navbar.css";
import { FaHeart } from "react-icons/fa";

function Navbar() {
  const { itemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-fixed w-100">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaGem className="text-primary fs-4 me-2" />
          <b className="logo-text">𝕊𝕙𝕠𝕡𝔼𝕒𝕤𝕪</b>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-flex justify-content-evenly align-items-center">
            <li className="nav-item py-2 py-lg-0 mx-2">
              <NavLink className="nav-link" to="/">
                <b> Home</b>
              </NavLink>
            </li>
            <li className="nav-item py-2 py-lg-0 mx-2">
              <a className="nav-link" href="#about">
                <b>About</b>
              </a>
            </li>
            <li className="nav-item py-2 py-lg-0 mx-2">
              <NavLink className="nav-link" to="/products">
                <b>Products</b>
              </NavLink>
            </li>
            <li className="nav-item py-2 py-lg-0 mx-2">
              <a className="nav-link" href="#contact">
                <b>Contact Us</b>
              </a>
            </li>
          </ul>
        <ul className="m-0">
          <li className="nav-item py-2 py-lg-0 me-lg-4 pb-1">
            <NavLink to="/sign-up">
              <b>
                <FaRegUser className="color-primary" size={20} />
              </b>
            </NavLink>
          </li>
          <li className="nav-item py-2 py-lg-0 me-lg-4">
            <NavLink to="/wishlist">
              <FaHeart className="heart-icon" />
            </NavLink>
          </li>
          <li className="nav-item py-2 py-lg-0 me-lg-3">
            <NavLink className="position-relative " to="/cart">
              <b>
                <IoCartOutline className="color-primary" size={25} />
                <span className="badge text-dark rounded-pill translate-middle">
                  {itemCount}
                </span>
              </b>
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;