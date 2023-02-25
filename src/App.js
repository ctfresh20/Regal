import logo from './logo.svg';
import './App.css';
import Prenavbar from './Components/Pages/Prenavbar';
import {Routes, Route} from "react-router-dom";
import Footer from './Components/Pages/Footer';
import No from "./Components/Pages/No";
import Sunday from './Components/Pages/Sunday';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Delivery from './Components/Pages/Delivery';
import Help from './Components/Pages/Help';
import Departments from './Components/Artificial Flowers/Departments';
import Artificial from './Components/Artificial Flowers/Artificial';
import Export from './Components/Pages/Export';
import Artificialtress from './Components/Pages/Artificialtress';
import Product from './Components/Pages/Productss.jsx';
import Register from './Components/Pages/Register';

import Registers from './Components/Pages/Registers';
import Super from './Components/Pages/Super';
import Brands from './Components/Pages/Brands';
import Arrivels from './Components/Pages/Arrivels';
import Kitchen from './Components/Pages/Kitchen';
import Kitchnss from './Components/Pages/Kitchnss';
import Productkitchen from "./Components/Pages/Productkitchen";
import Electrical from "./Components/Pages/Electrical";
import Electricdis from "./Components/Pages/Electricdis";
import Electrichos from "./Components/Pages/Electrichos";
import Bathroom from './Components/Pages/Category/Bathroom/Bathroom';
import Bathroomdis from "./Components/Pages/Category/Bathroom/Bathroomdis";
import Bathroomzoomable from './Components/Pages/Category/Bathroom/Bathroomzoomable';
import Battery from "./Components/Pages/Category/Battery/Battery.jsx";
import Batteryzoomabl from "./Components/Pages/Category/Battery/Batteryzoomabl";
import Candles from './Components/Pages/Category/Candles/Candles';
import Candlesdis from './Components/Pages/Category/Candles/Candlesdis';
import Candlezoomables from './Components/Pages/Category/Candles/Candlezoomable';
import China from './Components/Pages/Category/China/China';
import Chinadis from './Components/Pages/Category/China/Chinadis';
import Chinazoomable from './Components/Pages/Category/China/Chinazoomable';
import Cleaning from './Components/Pages/Category/Cleaning/Cleaning';
import Cleaningdis from './Components/Pages/Category/Cleaning/cleaningdis';
import Cleaningzoomable from './Components/Pages/Category/Cleaning/Cleaningzoomable';
import Disposable from './Components/Pages/Category/Disposable/Disposable';
import Disposabledis from './Components/Pages/Category/Disposable/Disposabledis';
import Disposablezoomable from './Components/Pages/Category/Disposable/Disposablezoomable';
import Diy from './Components/Pages/Category/DIY/Diy';
import Diydis from './Components/Pages/Category/DIY/Diydis';
import Diyzoomable from './Components/Pages/Category/DIY/Diyzoomable';
import Frames from "./Components/Pages/Category/Frames/Frames";
import Frameszoomable from './Components/Pages/Category/Frames/Frameszoomable';
import Framesdis from './Components/Pages/Category/Frames/Framesdis';
import Gardeningdis from './Components/Pages/Category/Gardening/Gardeningdis';
import Gardening from './Components/Pages/Category/Gardening/Gardening';
import Gardeningzoomable from './Components/Pages/Category/Gardening/Gardeningzoomable';
import Love from './Components/Pages/Category/Love/Love';
import Lovedis from './Components/Pages/Category/Love/Lovedis';
import Lovezoomable from './Components/Pages/Category/Love/Lovezoomable';
import Glassware from './Components/Pages/Category/Glassware/Glassware';
import Glasswaredis from './Components/Pages/Category/Glassware/Glasswaredis';
import Glasswarezoomable from './Components/Pages/Category/Glassware/Glasswarezoomable';
import Hardwaredis from './Components/Pages/Category/Hardware/Hardwaredis';
import Hardwarezoomable  from './Components/Pages/Category/Hardware/Hardwarezoomable';
import Hardware from "./Components/Pages/Category/Hardware/Hardware";
import Household from './Components/Pages/Category/Household/Household';
import Householddis from './Components/Pages/Category/Household/Householddis';
import Householdzoomable from './Components/Pages/Category/Household/Householdzoomable';
import Incense from './Components/Pages/Category/Incense/Incense';
import Incensedis from './Components/Pages/Category/Incense/Incensedis';
import Incensezoomable from "./Components/Pages/Category/Incense/Incensezoomable";
import Kids from './Components/Pages/Category/Kids/Kids';
import Kidsdis from './Components/Pages/Category/Kids/Kidsdis';
import Kidszoomable from './Components/Pages/Category/Kids/Kidszoomable';
import Laundary from './Components/Pages/Category/Laundary/Laundary';
import Laundarydis from './Components/Pages/Category/Laundary/Laundarydis';
import Laundaryzoomable from './Components/Pages/Category/Laundary/Laundaryzoomable';
import Partyware from './Components/Pages/Category/Partyware/Partyware';
import Partywaredis from './Components/Pages/Category/Partyware/Partywaredis';
import Partywarezoomable from './Components/Pages/Category/Partyware/Partywarezoomable';
import Pest from './Components/Pages/Category/Pest/Pest';
import Pestdis from './Components/Pages/Category/Pest/Pestdis';
import Pestzoomable from './Components/Pages/Category/Pest/Pestzoomable';
function App() {
  return (
    <div className="App">
    <div style={{backgroundColor:"white"}}>
     <Prenavbar /></div>
   
     <Routes >
      <Route path="/" element={<Sunday />}/>
      <Route path="/About Us" element={<About />}/>
      <Route path="/Contact Us" element={<Contact />}/>
      <Route path="/delivery" element={<Delivery />}/>
      <Route path="/*" element={<No />}/>
     <Route path="/Help" element={<Help />}/>
     <Route path="/Departments" element={<Departments />}/>
     <Route path="/Artificial" element={<Artificial />}/>
     <Route path="/export" element={<Export />}/>
     <Route path="/Artificialtre" element={<Artificialtress />}/>
     <Route path="/Products" element={<Product />}/>
     <Route path="/Register" element={<Register />}/>
     <Route path="/Login" element={<Registers />}/>
     <Route path="/Sundays" element={<Super />} />
     <Route path="/Brands" element={<Brands />}/>
     <Route path="/Arrival" element={<Arrivels />}/>
     <Route path="/Kitchenware" element={<Kitchen />}/>
     <Route path="/Kitchenproducts" element={<Kitchnss />}/>
     <Route path="/Kitchenproduct" element={<Productkitchen />}/>
     <Route path="/Electrics" element={<Electrical />}/>
     <Route path="/Electricdescription" element={<Electricdis />}/>
     <Route path="/Electricdetail" element={<Electrichos  />} exact />
     <Route path="/Bathwares" element={<Bathroom />}/>
     <Route path="/Bath mats" element={<Bathroomdis />}/>
     <Route path="/Bathroomdiscription" element={<Bathroomzoomable />}/>
     <Route path="/Battery" element={<Battery />}/>
     <Route path="/Battery200" element={<Batteryzoomabl />}/>
     <Route path="/Candles" element={<Candles />}/>
     <Route path="/Candle discription" element={<Candlesdis />} />
     <Route path="/Candle Alter" element={<Candlezoomables />}/>
     <Route path="/China" element={<China />}/>
     <Route path="/China Descriptions" element={<Chinadis />}/>
     <Route path="/China Alter" element={<Chinazoomable />}/>
     <Route path="/Cleaning" element={<Cleaning />}/>
     <Route path="/Cleaning Descriptions" element={<Cleaningdis />}/>
     <Route path="/Cleaning Alter" element={<Cleaningzoomable />}/>
     <Route  path="/Disposable"  element={<Disposable />}/>
     <Route path="/Disposable Materials"  element={<Disposabledis />}/>
     <Route path="/Disposables" element={<Disposablezoomable />}/>
     <Route path="/Diy" element={<Diy />}/>
     <Route path="/Diy Materials" element={<Diydis />}/>
     <Route path="/Diyss"  element={<Diyzoomable />}/>
     <Route path="/Frame"  element={<Frames />}/>
     <Route path="/Frames Material" element={<Frameszoomable />}/>
     <Route path="/Frame Products" element={<Framesdis />}/>
     <Route path="/Gardening Descriptions" element={<Gardeningdis />}/>
     <Route path="/Gardening" element={<Gardening />}/>
     <Route path="/Gardening Material" element={<Gardeningzoomable />}/>
     <Route path="/Love" element={<Love />}/>
     <Route path="/Love Descriptions" element={<Lovedis  />}/>
     <Route path="/Love Material" element={<Lovezoomable />}/>
     <Route path="/Glassware" element={<Glassware />}/>
     <Route path="/Glassware Material"  element={<Glasswaredis />}/>
     <Route path="/Glassware Description" element={<Glasswarezoomable />}/>
     <Route path="/Hardware" element={<Hardware />}/>
     <Route path="/Hardware Material"  element={<Hardwaredis />}/>
     <Route path="/Hardware Description" element={<Hardwarezoomable />}/>
     <Route path="/Household" element={<Household />}/>
     <Route path="/Household Material"  element={<Householddis />}/>
     <Route path="/Household Description" element={<Householdzoomable />}/>
     <Route path="/Incense" element={<Incense />}/>
     <Route path="/Incense Material" element={<Incensedis />}/>
     <Route path="/Incense Description" element={<Incensezoomable />}/>
     <Route path="/Kids" element={<Kids />}/>
     <Route path="/Kids Material"  element={<Kidsdis />}/>
     <Route path="/Kids Description" element={<Kidszoomable />}/>
     <Route path="/Laundary" element={<Laundary />}/>
     <Route path="/Laundary Material" element={<Laundarydis />}/>
     <Route path="/Laundary Description" element={<Laundaryzoomable />}/>
     <Route path="/Partyware" element={<Partyware />}/>
     <Route path="/Partyware Material" element={<Partywaredis />}/>
     <Route path="/Partyware Description" element={<Partywarezoomable />}/>
     <Route path="/Pest"  element={<Pest />}/>
     <Route path="/Pest Material" element={<Pestdis />}/>
     <Route path="/Pest Description" element={<Pestzoomable />}/>
     </Routes>
 
     <div style={{marginTop:"3%"}}> 

    <Footer />
   </div>
 
    </div>
  );
}

export default App;
