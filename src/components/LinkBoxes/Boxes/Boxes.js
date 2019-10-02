import React from "react";
import "./Boxes.scss";
import {Link} from 'react-router-dom';

function Boxes(props) {
  return (
    <div
      id="box"
      style={{
        background: `url(${props.image})`
      }}
    >
      <div className="info-box">
        <h1>{props.name}</h1>
        <p>{props.info}</p>
        <Link to='/products' onClick={props.clicked} className='link'>discover</Link>
      </div>
    </div>
  );
}

export default Boxes;
