import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HYBi2B7d9YeuXUbeNjmehiOvakucCVVHy90PPW4bIW6qu3M8CTPTkuNn7EFNB4TL4ToYBoE7hIzJRfPr7VJJ4EA003YSYEj7P';

    const onToken = token => {
        console.log(token)
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;
