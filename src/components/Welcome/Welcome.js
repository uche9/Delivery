import SVGData from '../SVGData/SVGData'
import './Welcome.css'
import image1 from './image1.jpeg'
import image2 from './image2.jpeg'
import {useState,useEffect} from 'react'

export default function Welcome(){
   
    const welcome_data=[
            {
              upperText:'Welcome to Our company',
              lowerText:'DELIVERY MADE EASY'
           },
           {
            upperText:'Percel deliveries',
            lowerText:'AROUND THE WORLD'
         },

        ]
    
//Set state for image status to flip image
    const [count,setCount]=useState (0)

    useEffect(()=>{

     let t= setTimeout(()=>{
        setCount(prevcount=>((prevcount+1)%2))
      },6000) 

    return ()=>clearTimeout(t)
    },[count])
    


    return(
      <> 
            <div className='welcome--container'>
            
                
                <img src={count===0? image1:image2} alt='pics' className='background--image--1'   /> 
                                        
                <div class='welcome--message'  >
                          <div>
                                <p className='upper--text'>{welcome_data[count].upperText}</p>
                                <div className='underline' ></div>
                                <p className='lower--text'>{welcome_data[count].lowerText}</p>
                          </div>
                                
                           <div  className='welcome--icons'>
                                <div className='umbrella--icon' id='welcome--icon'>
                                        {SVGData[7].code}
                                </div>
                                <div className='checklist--icon' id='welcome--icon'>
                                        {SVGData[8].code}
                                </div>
                              <div className='callsupport--icon' id='welcome--icon'>
                                      {SVGData[9].code}
                              </div>
                      </div>
                </div>
                
                
                
            </div>
            
      </>
    
  )
}