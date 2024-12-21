import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import Cartitems from "../Component/cart-items.tsx/cart-items";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId:"jhfsyud",
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    name:"Macbook",
    price:3000,
    stock:40,
    quantity:10,


  },
];
const subtotal = 40000;
const tax =  Math.round(subtotal*0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges ;
const discount = 400;

function Cart() {

   const [couponCode , setCouponCode] = useState<string>("")
   const [isValidcouponCode, setisValidCouponCode] = useState<boolean>(false)

   useEffect(() => {
   const timeoutID = setTimeout(() => {
        if(Math.random() > 0.5) setisValidCouponCode(true);
        else
        setisValidCouponCode(false);
      },1000);

      return () => {
        clearTimeout(timeoutID);
        setisValidCouponCode(false);
      };
    
   } , [couponCode]);

  return (
    <div className="cart">
      <main>

        {
           cartItems.length > 0 ? cartItems.map((i , idx) => (
            <Cartitems key ={idx} cartItems={i} />))  : 

            <h1>No Items Added</h1>
         
        }



      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em> - ₹{discount} </em>
        </p>
        <p><b>Total: ₹{total} </b></p>
        <input type="text" value={couponCode} onChange={e=>setCouponCode(e.target.value)}/>
        
        {
          couponCode && (
            isValidcouponCode ?(
              <span className="green">
                ₹{discount} off using the <code>{couponCode}</code>
              </span>
            ):(
              <span className="red">
                Invalid coupon <VscError/>
              </span>
            )
          )
        }
        <br />
        {
          cartItems.length > 0 && <Link to="/shipping" className="checkbox" >Checkout</Link>
        }



      </aside>
    </div>
  )
}

export default Cart