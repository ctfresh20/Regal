

import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import aa from "./Images/1.jpg"
function Kidszoom() {
  return (
    <div>
   <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: aa
    },
    largeImage: {
        src: aa,
        width: 1000,
        height: 1200
    }
}} />
    </div>
  )
}

export default Kidszoom;
