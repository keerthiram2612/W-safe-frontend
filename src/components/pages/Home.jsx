import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from  '@fortawesome/free-brands-svg-icons'


export default function Home() {
  const gotoAbout=()=>{
   navigate('/about');
  }
  const navigate = useNavigate();
  return (
    <div>
      <div className='image'>
       <img  className = "image1"src='https://zonesafe.com/wp-content/uploads/2022/09/Safety-Journey-Image-for-Website-Article.jpg'/>
      </div>

      <div className='home-content'>
        <p>Way-safe is a navigation app that can help drivers & persons stay on track and
          <br/> get alerts about safety hazards on the road. It can detect road 
          <br/>hazards, traffic, road conditions, and other alerts.</p>
      </div>
      <button onClick={gotoAbout} className='btn-grad'>More about
      </button>
      <div className='icons'>
        <a href = "https://www.instagram.com/">
      <FontAwesomeIcon className="instagram"icon={faInstagram} />
      </a>
       <a href = "https://www.facebook.com/">
       <FontAwesomeIcon className='facebook' icon={faFacebook} />
       </a>
       <a href = "https://eservices.tnpolice.gov.in/CCTNSNICSDC/ComplaintRegistrationPage?0">
       </a>
      </div>
     
    </div>
  )
}
