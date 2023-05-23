//import GhostBar from './GhostBar/GhostBar.js'
import Tracker from './Tracker/Track.js'
import NavBar from './NavBar/NavBar.js'
import Footer from './Footer/Footer.js'


export default function TrackShipment(){
    return(      
            
            <div  style={{display:'flex', flexDirection:'column'}}>
                 
                 <NavBar />
                <Tracker />
                <Footer />
            </div>
        
    )
}