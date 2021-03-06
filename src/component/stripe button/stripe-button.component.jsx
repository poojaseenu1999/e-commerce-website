import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KV5GHJn4OBf8pY6opA0PFRfHiWvpdmrtbj5Rm3ssHaZLFQAskEMR4Tbhx80blk5mdl5CkL3jPTftf5Z8Qxf3CzG00wVsgmwN8';

const onToken = token => {
    console.log(token);
    alert('Payment successful');
}


    return (
        <StripeCheckout 
          label = 'Pay Now'
          name = 'CRWN clothing ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description = {`Your total is $${price}`}
          amount= {priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;