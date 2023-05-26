import React, { useEffect, useState }  from 'react'
import Hero from "./assets/images/Hero.png";
import Searchform from "./assets/images/Searchform.png"
import Section4 from "./assets/images/Section4.png"
import Footer from "./assets/images/Footer.png"
import Section1 from "./assets/images/Section1.png"
import Section5 from "./assets/images/Section5.png"
import Section2 from "./assets/images/dont worries.png"

function LandingPage() {

    
  return (
    <div>

        <div>
            {/* <img src={Hero} alt='img' style={{width:'100%',height:'80vh',objectFit:"fill"}} /> */}
            <img src={Section1 } alt='img'  style={{width:'100%',height:'100vh',objectFit:"fill"}} />
        </div>
        <div>
            <img src={Section2} alt=""   style={{width:'100%',height:'200vh',objectFit:"fill"}}  />
        </div>
        <div>
        <img src={Section4} alt='img'   style={{width:'100%',marginTop:'100px'}} />
        </div>
        <div>
        <img src={Section5} alt='img'  style={{width:'100%',height:'500vh',objectFit:'fill',marginTop:'-4px'}} />
        </div>
        <div>
        <img src={Footer} alt='img'   style={{width:'100%',height:'100vh',paddingTop:'100px'}} />
        </div>
      
    </div>
  )
}

export default LandingPage
