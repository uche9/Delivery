//import ScrollAnimate from '../FuncLibrary/ScrollAnimate'
import {useState, useEffect} from 'react'
import './Service.css'
import image_1 from './image_1.jpeg' 
import image_2 from './image_2.jpeg' 
import image_3 from './image_3.jpeg' 



export default function Service(){

    const service_data=[
        { 
            key: 1,
            image:image_1,
            text1: 'Truck Haulers',
            text2: `Need a one-stop solution for your international air freight and 
                    forwarding needs, whereas a faster, safer and cost-effective way 
                    to ship and track your cargo by air to anywhere across the globe? 
                    Look no further than Delivery Made Easy.`,
            text3: `FIND OUT MORE >>>`

        },
        {  
            key: 2,
            image:image_2,
            text1: 'Delivery Vans',
            text2: `If you require a quality Road Freight Services ( Road Transport ) 
                    logistics provider that abides by your precise shipping needs with 
                    reliable, time reducing and cost-effective results, then the services
                   of Delivery Made Easy are right for you.`,
            text3: 'FIND OUT MORE >>>'
     },
        {
            key: 3,
            image:image_3,
            text1: 'Multipurpose Trucks',
            text2: `Delivery Made Easy is an active member of international groups of 
                    vetted forwarders in over 120 countries worldwide, 
                    many of which we have had relationships with since our inception.`,
            text3: 'FIND OUT MORE >>>'
        },
      
     ]

      /* Set up container resizing function for image fitting 
      * use useState & useEffect to generate window with.
      * us if condition to adjust container size
      */
      const [width, setWidth]=useState(window.innerWidth)
      const [cont_size, setContSize]=useState(window.innerWidth)
      
      useEffect(()=>{
   
       const handleResize=()=>{
           setWidth( window.innerWidth)
       } 
   
     
       setContSize(()=>{
           if(width>=1017) {
               return 27   
           }
           else if(width<1000 && width>750){
              return 90
           }
       })
       
       
       window.addEventListener('resize', handleResize);
       return ()=>window.removeEventListener('resize', handleResize);
       
      },[width])


    function KeyService(){
       const service_info=service_data.map( (el,index) =>{
         
                    return(
                              
                                    <div  style={{ paddingTop:'5px',paddingRight:'5px',paddingLeftight:'5px', color:'#000',opacity:'1', width:`${cont_size}%`, margin:'0px 20px', borderRadius:'10px',boxShadow:'5px 5px 5px yellow', border:'none'}}>
                                                
                                                <img style ={{width :'100%', aspectRatio:'2', marginBottom:'5px'}} alt='pics here'src={el.image}  className='serv--image' />
                                                <p style={{padding:'20px', marginBottom:'15px',fontWeight:'700', fontSize:'20px' , color:'#fff'}}>{el.text1}</p>
                                                <p style={{padding:'20px' , marginBottom:'15px', fontWeight:'400', fontSize:'14px' ,color:'#fff'}}>{el.text2}</p>
                                                <p style={{padding:'20px' , marginBottom:'10px', fontWeight:'600', fontSize:'14px', color:'#fff'}}>{el.text3}</p>
                                    </div>
                )
       })

   return service_info     
    }

   

    return(
        <div className='service--container'  >
              
             <div className='check'>Check out all our services</div>
               
            <div className='fleet'>OUR VEHICLE FLEET</div>
             <div  style={{display:'flex' ,justifyContent:'space-around', flexWrap:'wrap', fontSize:'10px' ,marginTop:'30px'}}>
                  
                  <KeyService  />
            </div>    
        </div>

    )

    
}
