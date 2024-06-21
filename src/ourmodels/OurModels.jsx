import './OurModels.css'
import OurModelsContent from "../components/ourmodelscontent/OurModelsContent";
import img from '../../src/assets/project-icon6.png';
import img1 from '../../src/assets/project-icon5.png';
import img2 from '../../src/assets/project77.png';
import img3 from '../../src/assets/project-icon7.png';
import img5 from '../../src/assets/project-icon12.png';
import img6 from '../../src/assets/project-icon14.png';

export default function OurModels() {
  const openlink = () => {
    window.open('https://4dx.uz/d-clinics.html', '_blank')
  }
    return(
        <>
          <h1 className="text-center" style={{marginTop: "10rem", color: "#2893c0"}}>All the possibilities of the system</h1>

          <div className="models-container">
            <div className='col-4'>
             <OurModelsContent
               image={img2}
               title='Project'
               description='D-Clinics is a clinics management system. This customizable clinics management system includes patient comprehensive clinics management system that is best suited for medical clinics'
             />
             </div>
             <div className='col-4'>
             <OurModelsContent
               image={img1}
               title='Patient registration'
               description=' Patient Registration module of our Practice Management System is designed to manage vital information for the patient information chart, which marks the outset of demographics capture. tI encompasses the patient`s name, address and contact info'
             />
             </div>
           </div>

           <div className="models-container">
            <div className='col-4'>
             <OurModelsContent
               image={img}
               title='Appointment & Scheduling'
               description='D-Clinics includes a calendaring or scheduling component that allows staff to create and track upcoming patient visits. Software is often differentiated by whether it allows double- booking, or whether it uses a scheduling or a booking model.'
             />
             </div>
             <div className='col-4'>
             <OurModelsContent
               image={img3}
               title='Outpatient Management'
               description=' All the details of Outpatient patients are managed in this module of Clinic Management System.
               Simple patient Billing / Collection
               Clearly organized services, e.g. Consulting Services, Procedures, Medicines, X-Ray, Labs, MRI etc.'
             />
             </div>
           </div>

           <div className="models-container">
            <div className='col-4'>
             <OurModelsContent
               image={img5}
               title='Pharmacy Management'
               description='Complete pharmacy shop can be managed through this module of Clinic Management System. Additionally it can be linked to main billing. As patient collects medicines from pharmacy shop their charges will automatically transfer to patient billing.'
             />
             </div>
             <div className='col-4'>
             <OurModelsContent
               image={img6}
               title='Consultant Management'
               description='This module of D-Clinics, our Practice Management System helps in tracking of consultant charges for outpatient and inpatient visits and procedures. Option for defining consultant charges based on the procedures/ department.'
             />
             </div>
           </div>
            <div className='model-button-div'>
              <button onClick={openlink} className='model-button'>More Information</button>
            </div>
        </>
    )
}