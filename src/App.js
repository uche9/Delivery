
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ServDetails from './components/ServDetails';
import Home from './components/Home.js'
import AboutUs from './components/AboutUs.js'
import Services from './components/Services.js'
import Contact from './components/Contact.js'
import TrackShipment from './components/TrackShipment.js'

export default function App() {
  return (
    <div>
           
              
          
            <BrowserRouter>
                  <Routes>
                              
                              <Route path= { '/home'} element={<Home />} />
                              <Route path= { '/'} element={<Home />} />
                              <Route path= { ''} element={<Home />} />
                              <Route exact path='/services' element={<Services />} />
                              <Route exact path='/about_us' element={<AboutUs />} />
                              <Route exact path='/track_shipment' element={<TrackShipment />} />
                              <Route exact path='/contact' element={<Contact />} />  
                              <Route exact path='/service/b2b_exchange' element={ <ServDetails id='0' />} />
                             <Route exact path='/service/courier_delivery' element={ <ServDetails id='1' />} />
                              <Route exact path='/service/logistics' element={ <ServDetails id='2' />} /> 
                         
                             {/**  <Route path='*' element={ <div>Error</div>} /> */}
                  </Routes>
            </BrowserRouter>
              
    </div>
  );
}

 
