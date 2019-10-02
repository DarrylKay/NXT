import React from "react";
import "./CreateAccount.scss";

function CreateAccount() {
  return (
    <div className="create-container">
      <div className="create-box">
        <div className="create-header">
          <h1 className="title">Create an account</h1>
        </div>
        <div className="info-section">
          <p>
            Creating an account will allow you to place and track orders, update
            delivery details and recieve special member discounts.
          </p>
        </div>
        <button className="create-button">Create account</button>
      </div>
    </div>
  );
}

export default CreateAccount;
