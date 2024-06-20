import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";


const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [carts ] = useCart();
    const { user } = useAuth() 

    const totalPrice = carts.reduce((total, item) => total +item.price ,0)
    // console.log("total price form reducer", totalPrice)

    useEffect(()=>{
        if(totalPrice > 0 ) {
          axiosSecure.post("/create-payment-intent", {price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
        }
    }, [axiosSecure, totalPrice])






    
    const handleSubmit = async (event) => {
           event.preventDefault();

           if( !stripe || !elements){
            return;
           }

           const card = elements.getElement(CardElement)
           if(card == null){
            return;
           }



           const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
           })

           if(error){
            console.log("payment error", error)
           }else{
            console.log("payment method", paymentMethod)
           }





          //  stripe confirm payment 
          const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details:{
                name: user?.displayName,
                email: user?.email
              }
            }
          })

          if(confirmError){
            console.log( "confirm error", confirmError)
          }else{
            console.log("paymentIntent", paymentIntent)
            if(paymentIntent.status == "succeeded"){
               setTransactionId(paymentIntent.id)
               const payment = {
                     email: user?.email,
                     price: totalPrice,
                     transactionId: paymentIntent.id,
                     cardIds: carts.map((item) => item._id ),
                     menuItemId: carts.map((item) => item.manuId),
                     status: "panding",
                     date: new Date()   //convert utc time 
               }
              //  post payment data in database 
              const res  = await axiosSecure.post('/payments', payment)
              console.log( 'post payment', res.data)
            }
          }



    }




    return (
        <div>
            <SectionTitle heading='Payment' subheading='Cart info'></SectionTitle>
           <form onSubmit={handleSubmit}> 
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>

      { transactionId && <p className="text-green-500 font-serif"> Transaction id:  {transactionId} </p> }

           </form>
        </div>
    );
};

export default CheckoutForm;