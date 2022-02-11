import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { removeItem, addItem, reduceItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItem, addItem, reduceItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="img" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => reduceItem(cartItem)} >&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  reduceItem: (item) => dispatch(reduceItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
