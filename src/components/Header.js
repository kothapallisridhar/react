import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // never use your useState hook inside a condition, inside a function or inside loops
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("Header render");

  // if no dependency array => useEffect is called on every render
  // if empty dependency array => [] => useEffect is called on initial render(just once)
  // if dependency array is [btnName] => called everytime btnName is updated
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="menu">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
