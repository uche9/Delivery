import {useState,useEffect} from 'react'
import './WhoWeAre.css'
import Strength from '../Strength/Strength.js'

export default function WhoWeAre(){

       //Reading window size to resize container
   const [width, setWidth]=useState(window.innerWidth || 1000)
   
   
   useEffect(()=>{
  

    const handleResize=()=>{
        setWidth( window.innerWidth)
    } 
    
    window.addEventListener('resize', handleResize);
    return ()=>window.removeEventListener('resize', handleResize);
    
   },[width])




    const who_we_are_data=['Founded in 2008', 'Operating in over 200 countries', 'Master of Land Sea and Air']
    const who_we_are=who_we_are_data.map(el=>{
        return(
            <div className='who--we--are'>{el}</div>
        )
    })

    return(
        <div>
            <div  style={{
                          display:'flex',
                          justifyContent:'center',
                          alignItems:'center',
                          backgroundColor:'#aaa', width:'100%', height:`${width>900? 650 : 500}px`}}>
                          
                        <div   
                        style={{
                                fontWeight:'500', 
                                fontSize:'20px', 
                                paddingLeft:'3px',paddingRight:'3px' ,
                                color:'#00f', 
                                display:'flex', width:'100%', justifyContent:'space-evenly',
                                marginBottom:'10px',
                                marginTop:'10px',
                                textAlign:'center',
                                
                                }} >

                            { who_we_are}
                        </div>
            </div>
           

             <Strength />
        </div>
    )
}
