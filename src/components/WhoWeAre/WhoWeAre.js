import './WhoWeAre.css'
import Strength from '../Strength/Strength.js'

export default function WhoWeAre(){

    const who_we_are_data=['FOUNDED IN 2008', 'OPERATING IN 34 COUNTRIES', 'MASTER OF LAND SEA AND AIR']
    const who_we_are=who_we_are_data.map(el=>{
        return(
            <div className='who--we--are'>{el}</div>
        )
    })

    return(
        <div>
            
            <div   
            style={{
                     fontWeight:'500', 
                     fontSize:'25px', 
                     paddingLeft:'0px',paddingRight:'0px' ,
                     color:'#00f', 
                     display:'flex', width:'100%', justifyContent:'space-evenly',
                     marginBottom:'100px',
                     marginTop:'100px',
                     }} >
                   { who_we_are}
            </div>

             <Strength />
        </div>
    )
}
