import {useState, useEffect} from 'react'
import './ServiceDetails.css'
import SVGData from '../../SVGData/SVGData'
import { ServiceDetailsData } from './ServiceDetailsData.js'




export default function ServiceDetails({myId}){

   //Reading window size to resize container
   const [width, setWidth]=useState(window.innerWidth || 1000)
   
   
   useEffect(()=>{
  

    const handleResize=()=>{
        setWidth( window.innerWidth)
    } 
    
    window.addEventListener('resize', handleResize);
    return ()=>window.removeEventListener('resize', handleResize);
    
   },[width])


    return(
        <div className='conatainer--service--details'>
            <div className='super--container' >
                  
                        <div className="container--welcome--service"   style={{height:`${width>900? 650 : 550}px`}}> 
                        <img src={ServiceDetailsData[myId].bImage_1}   style={{height:`${width>900? 650 : 550}px`}} alt='back-pics' className="background-image-1" />
                            <div className='message--container' >
                                <p className='upper--text--service'>{ServiceDetailsData[myId].upperText}</p>
                                <div className='underline--service' ></div>
                                <p className='lower--text--service'>{ServiceDetailsData[myId].lowerText}</p>
                            </div>
                                
                        </div>
            </div>
            <div className='more--details--container'>
                <div className='head'>
                {ServiceDetailsData[myId].head}
                </div>
                <div style={{margin:'20px' , display:'flex', width:'60%'}}>
                        <span> {SVGData[6].code}</span>
                        <span className='upper--para' >
                        {ServiceDetailsData[myId].upperPara}
                        </span>
                       
                </div>
                
                <div>
                   <img src={ServiceDetailsData[myId].paraImage} className='image--para' alt='pics'></img>
                </div>   
                
                <p className='lower--para'>
                {ServiceDetailsData[myId].lowerPara}
                </p>
            </div>
              
        </div>
    )
}