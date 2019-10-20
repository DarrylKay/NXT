import React from "react";
import "./Login.scss";
import flag from "../../../assets/Various/GB-flag.jpg";
import {Link} from 'react-router-dom'

function LogIn() {
  return (
    <div id="log-in">
      <Link to='/login' className="link">join / log in</Link>
      <p>|</p>
      <h5>English</h5>
      <img src={flag} alt="GB Flag" />
    </div>
  );
}

export default LogIn;
