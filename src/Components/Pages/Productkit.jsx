import React, { Component } from 'react';

import ZoomableImage from 'react-zoomable-img';
import aa from "../Super/brand/brands1/kitchen1.png";
class Product extends Component {
  render() {
    return  <ZoomableImage src={aa} alt='some alt text' zoomScale={2} transitionDuration={0.5}/>
  }
}
export default Product;