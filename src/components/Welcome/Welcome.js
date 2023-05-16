import './Welcome.css'
import image1 from './image1.jpeg'
import image2 from './image2.jpeg'
import {useState,useEffect} from 'react'

export default function Welcome(){
   
    const welcome_data=[
            {
              upperText:'Welcome To Our Company',
              lowerText:'DELIVERY MADE EASY'
           },
           {
            upperText:'Percel Deliveries',
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
    <div className='welcome--container'>
         
        <div className='left--arrow'>  </div>
               <img src={count===0? image1:image2} alt='pics' className='background--image--1'   /> 
                                
        <div class='welcome--message'  >
             <p className='upper--text'>{welcome_data[count].upperText}</p>
             <div className='underline' ></div>
             <p className='lower--text'>{welcome_data[count].lowerText}</p>
        </div>
        <div className='right--arrow' style={{color:'red'}}>  </div>
    </div>
  )
}