import React from 'react';

import ims from "./images/imm.mp4";

import "./No.css";

function Nos() {
  return (
    <div className="container-fluid">
   <video autoPlay muted loop id="video">
<source  src={ims} type='video/mp4' />
   </video>
    </div>
  )
}

export default Nos;
