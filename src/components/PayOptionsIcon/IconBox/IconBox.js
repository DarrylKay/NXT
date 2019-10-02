import React from "react";
import "./IconBox.scss";


function IconBox(props) {
  return (
    <div className="icon-container">
      <div className="icon-box">
        {props.icon}
      </div>
      <div className="info-box">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default IconBox;
