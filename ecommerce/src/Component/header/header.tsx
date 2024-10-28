import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";

const user = { 
  _id: "gdfg",
  role: "admin" 
};

const Header = () => {

  const logoutHandler = () => {
    setisOpen(false);
  }

  const [isOpen , setisOpen] =  useState(false);
 
  return ( 
    <nav className="header">
      <Link onClick={() => setisOpen(false)} to="/">Home</Link>
      <Link onClick={() => setisOpen(false)} to="/search"><FaSearch /></Link>
      <Link onClick={() => setisOpen(false)} to="/cart"><FaShoppingBag /></Link>
      {
        user?._id ? (
          <>
            <button onClick={() => setisOpen((prev) => !prev)}>
              <FaUser />
            </button>
            <dialog open={isOpen}>
              <div>
                {
                  user.role === "admin" && (
                    <Link to="/admin/dashboard">Admin</Link>
                  )
                }
                <Link onClick={logoutHandler} to="/orders">Orders</Link>
                <button>
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
          </>
        ) 
        : <Link to="/login"><FaSignInAlt /></Link>
      }
    </nav>
  );
}

export default Header;
