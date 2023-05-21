/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Menubar-container">
      <div className="logo">
        <h3>Musical</h3>
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/4017/4017755.png"
          alt=""
        />
        <h3>Toy</h3>
      </div>
      <div className="menu-container fw-bold ">
        <Link className="menu-item" to="/">
          <li>Home</li>
        </Link>

        
        <Link className="menu-item" to="toygalarys">
          <li>Toy Gallery</li>
        </Link>

        <Link className="menu-item" to="/MyToys">
          <li>My Toys</li>
        </Link>
        <Link className="menu-item" to="/blog">
          <li>Blog</li>
        </Link>
       {user && <Link className="menu-item" to="/addToy">
          <li>Add Toys</li>
        </Link>}

        {user?.email ? (
          <li className="p-2">
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <Link className="menu-item" to="/login">
            <li>Login</li>
          </Link>
        )}
        {/* <li>{user?.email}</li> */}
        <Link className="menu-item" to="/register">
          <li>Registration</li>
        </Link>

        {/* <li>home</li>
        <li>sds</li>
        <li>asdsa</li>
        <li>asdas</li> */}
      </div>
    </div>
  );
};

export default Menubar;
