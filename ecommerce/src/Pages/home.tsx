import { Link } from "react-router-dom";
import Productcard from "../Component/product-card";

const Home = () => {

const addtocarthandler = () => {

}

    return (
      <div className="home">
        <section>

        </section>

        <h1>Latest Products 
         <Link to= "search" className="findmore">More</Link>
        </h1>

        <main>
          <Productcard 
          productId="asasda" 
          name="Macbook" 
          price={4545} 
          stock={544} 
          handler={addtocarthandler} 
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"/>
        </main>
      </div>
    )
  };
  
  export default Home;
  