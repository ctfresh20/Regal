import React, { Component } from 'react';
import aa from "../Super/brand/brands1/brands/electric/1.png";

import ZoomableImage from 'react-zoomable-img';
 
class Product extends Component {
  render() {
    return  <ZoomableImage src={aa} alt='some alt text' zoomScale={2} transitionDuration={0.5}/>
  }
}
export default Product;