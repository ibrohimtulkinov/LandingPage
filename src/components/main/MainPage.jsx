import MiniLink from "../minilinks/MiniLink"
import Mockup from "../../assets/1333.png"
import dot from "../../assets/Group10.png"
import dot2 from "../../assets/Group9.png"
import dot3 from "../../assets/Group 5.png"
import img from "../../assets/d-clinics.blog.png"
import img1 from "../../assets/d-clinics2.png"
import "./Main.css"

export default function MainPage() {
    return(
        <>
         <div className="main-page">
                <div className="col-text-main">
                 <h1 className="text-main">Building exactly the eCommerce website you want.</h1> 
                 <p className="text">WooCommerce is a customizable, open-source eCommerce platform built on WordPress. 
                  Get started quickly and make your way.</p>
                  <div className="d-flex align-items-center"> 
                    <button className="main-button">Start a New Store</button>
                     <span style={{color: "#94A2B3", marginLeft: "7px",marginRight: "7px"}}>or</span>
                     <MiniLink>Customize & Extand › </MiniLink>
                  </div>
                </div>

                <div className="">
                  <img src={Mockup} alt="mockup" className="mockup"/>
                  <div className="d-clinics7">
                    <img src={img} alt="image" className="screenshot-7"  style={{width: "200px", height: "auto", borderRadius: "20px"}}/>
                  </div>
                  <div className="d-clinics77">
                   <img src={img1} className="screenshot-77" alt="image" style={{width: "200px", height: "auto", borderRadius: "20px"}} />
                 </div>
                   <img src={dot2} className="dot77" alt="image"/>
                   <img src={dot} className="dot7" alt="image"/>
                   {/* <img src={dot3} className="dot777" alt="image"/> */}
                </div>

         </div>
        </>
    )
}