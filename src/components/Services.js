
import NavBar from './NavBar/NavBar.js'
import Service from './Service/Service.js'
import Footer from './Footer/Footer.js'

export default function Services(){
    return(
        <div  style={{display:'flex', flexDirection:'column'}}>
                <NavBar />
                <Service />
                <Footer />
        </div>
    )
}