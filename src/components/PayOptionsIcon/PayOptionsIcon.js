import React, { Component } from "react";
import "./PayOptionsIcon.scss";
import {
  FaTruckMoving,
  FaShoppingBasket,
 
  FaMoneyBill
} from "react-icons/fa";
import IconBox from "./IconBox/IconBox";

export class PayOptionsIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoBox: [
        {
          id: 1,
          icon: FaTruckMoving,
          description: "No additional delivery fees*"
        },
        {
          id: 2,
          icon: FaShoppingBasket,
          description: "No minimum order value"
        },

        {
          id: 3,
          icon: FaMoneyBill,
          description: "Equates to just £1.66 a month"
        }
      ]
    };
  }

  displayIcons = () => {
    return this.state.infoBox.map(item => {
      return (
        <IconBox
          icon={<item.icon className="icon" />}
          description={item.description}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <div className="pay-icon-section">
        <div className="pay-icon-container">{this.displayIcons()}</div>
      </div>
    );
  }
}

export default PayOptionsIcon;
