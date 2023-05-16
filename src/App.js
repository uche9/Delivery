
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
                              <Route path='*' element={ ''} />
                         
                  </Routes>
            </BrowserRouter>
              
    </div>
  );
}

 
