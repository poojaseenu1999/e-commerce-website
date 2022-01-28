import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { cartActions } from "../../redux/cart/cart.actions";

const CartIcon = ({ cartActions }) => (
  <div className="cart-icon" onClick={cartActions}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  cartActions: () => dispatch(cartActions()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
