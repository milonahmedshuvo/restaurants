import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    
    return (
        <div>
          <Elements stripe={stripePromise}>
             <CheckoutForm/>
            </Elements>       
        </div>
    );
};

export default Payment;