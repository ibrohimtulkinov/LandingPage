import WorksCard from '../works-card/Works-card'
import img from '../../assets/d-clinics.png';
import img2 from '../../assets/d-clinics3.png';
import big from "../../assets/bigcircle.png"
import medium from "../../assets/mediumcircle.png"
import little from "../../assets/littlecircle.png"
import dots from "../../assets/Group 7.png"
import dot2 from "../../assets/Group 8.png"
import './Work.css'

export default function Works() {
    return(
     <div className='works-background'>


       <div className="work-div">
            <div className='img-clone'>
                <img src={img} alt="img" className='works-img'/>
                <div className="big-circle">
                  <img src={big} alt="big" className='big' />
               </div>
               <div className="little-circle">
                  <img src={little} alt="little"  />
               </div>
                <img src={dots} className="group7" />
            </div>
            <div className='workscard'>
                <WorksCard
                   title={'Develop Without Limits'}
                   description={'WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.'}
                   button={'Read the Documentation'}
                 />
            </div>
       </div>


       <div className='work-div-conteiner'>
            <div className='work-div-flex'>
                 <div className='cardofwork'>
                     <WorksCard
                          title='Know our Global Community'
                          description='WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!'
                          button='Read the Documentation'
                     />
                 </div>
                 <div className='img-clone2'>
                    <img src={img2} alt="image" className='work2-img'/>
                    <div className="medium-circle">
                       <img src={medium} alt="medium"  />
                    </div>
                    <div className="little2-circle">
                       <img src={little} alt="little"  />
                   </div>
                     <img src={dot2} className="group8" />
                 </div>
            </div>
       </div>


     </div>
    )
}