import "./SecondLine.css"
import MiniLink from "../minilinks/MiniLink"
import Card from "../card/Card"
import img1 from '../../assets/d-clinics2.png';
import img2 from '../../assets/d-clinics.blog.png';

export default function SecondLines() {
    return(
        <div className="second-line-main-div">
          <h1 className="text-center">Your eCommerce <br/> made simple</h1>
          <div className="second-line-div">
            <div className="col-3 mt-5">
             <Card 
              image={img1} 
              title={"All You Need to Start"}
              description={"Add WooCommerce plugin to any WordPress site and set up a new store in minutes."}
             />  
             <MiniLink>Ecommerce for Wordpress ›</MiniLink>
            </div>
            <div className="col-3 customize">
            <Card 
              image={img2} 
              title={"Customize and Extend"}
              description={"From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable."}
             />  
             <MiniLink>Browse Extensions ›</MiniLink>
            </div>
            <div className="col-3 active">
            <Card 
              image={img1} 
              title={"Active Community"}
              description={"WooCommerce is one of the fastest-growing eCommerce communities. "}
             />  
             <MiniLink>Check our Forums ›</MiniLink>
            </div>
          </div>
        </div>
    )
}