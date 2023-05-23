import './WhoWeAre.css'
import Strength from '../Strength/Strength.js'

export default function WhoWeAre(){

    const who_we_are_data=['Founded in 2008', 'Operating in over 200 countries', 'Master of Land Sea and Air']
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
                     fontSize:'20px', 
                     paddingLeft:'3px',paddingRight:'3px' ,
                     color:'#00f', 
                     display:'flex', width:'100%', justifyContent:'space-evenly',
                     marginBottom:'100px',
                     marginTop:'100px',
                     textAlign:'center'
                     }} >
                   { who_we_are}
            </div>

             <Strength />
        </div>
    )
}
