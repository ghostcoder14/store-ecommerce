import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
type cartitemsProps = {
  cartItems:any 
} ;



const Cartitems = ({cartItems}: cartitemsProps) => {
  const {photo , name , productId , price  , quantity} = cartItems ;
  return (
    <div className="cart-items">
      <img src={photo} alt={name}/>
      <article>
        <Link to={`/product/${productId}`}></Link>
        <span>₹{price}</span>
      </article>
      <div>
        <button>
          -
        </button>
        <p>
          {quantity}
        </p>
        <button>
          +
        </button>
        <br />
        <button>
          <FaTrash/>
        </button>
      </div>
      </div>
  )
}

export default Cartitems