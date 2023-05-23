//import GhostBar from './GhostBar/GhostBar.js'
import NavBar from './NavBar/NavBar.js'
import ServiceDetails from './Service/ServiceDetails/ServiceDetails.js'
import Footer from './Footer/Footer.js'

export default function ServDetails({id}){
    return(
        <div  style={{display:'flex', flexDirection:'column'}}>
                
                
                 <NavBar />
                <ServiceDetails myId={id} />
                <Footer />
        </div>
    )
}