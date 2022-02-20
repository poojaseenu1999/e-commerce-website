import React from "react";
import {connect } from 'react-redux';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import StripeCheckoutButton from '../../component/stripe button/stripe-button.component';
import './checkout.styles.scss';

const CheckOut = ({ cartItems,total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem}/>
            ))
        }
         <div className="total">
            <span>Total:{total}</span>
            <div className="test-warning">
                *please use this card for payment*
                <br/>
                4242 4242 4242 4242 exp:01/23 cvv:123
            </div>
            <StripeCheckoutButton price={total}/>
         </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal 
})
export default connect(mapStateToProps)(CheckOut);