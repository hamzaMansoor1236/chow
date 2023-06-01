import React, { useEffect, useState } from 'react'
import header from "./assets/images/Header.png";
import section2 from "./assets/images/section2.png";
import section3 from "./assets/images/section3.png";
import footer from "./assets/images/footer.png";
import section4 from "./assets/images/section4.png";

function LandingPage() {


  return (
    <div style={{ background: 'rgb(243,255,249)' }}>


      <img src={header} alt="" style={{ width: "100%", verticalAlign: "top" }} />
      <div style={{ width: '1880px', paddingLeft: '117px' }}>
        <img src={section2} alt="" style={{ width: "100%", verticalAlign: "top" }} />
        <img src={section4} alt="" style={{ width: "100%", verticalAlign: "top", marginTop: '-2px' }} />
      </div>
      <img src={section3} alt="" style={{ width: "100%", verticalAlign: "top" }} />
      <img src={footer} alt="" style={{ width: "100%", verticalAlign: "top" }} />
    </div>

  )
}

export default LandingPage
