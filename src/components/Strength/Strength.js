
import ScrollAnimate from '../FuncLibrary/ScrollAnimate.js'
import {useState, useEffect} from 'react'
import './Strength.css'
import image3 from './image3.jpeg' 
import image_1 from './image_1.jpeg' 
import image_2 from './image_2.jpeg' 
import image_3 from './image_3.jpeg' 
import image_4 from './image_4.jpeg' 


export default function Strength(){

     const strength_data=[
        { 
            key: 1,
            id:'strength1',
            image:image_1,
            text1: 'Around the world',
            text2: 'Shipping',
            text3: `At Delivery Made Easy we are assured of a highly reliable, 
                   world class and extensively networked global Sea Freight service.`

        },
        {  
            key: 2,
            id:'strength2',
            image:image_2,
            text1: '24hr a day',
            text2: 'Courier Delivery',
            text3: `We offer a highly flexible airport-to-airport or a door to door 
                   service on domestic as well as international routes that match your needs and schedules.`
        },
        {
            key: 3,
            id:'strength3',
            image: image_3,
            text1: 'New Service',
            text2: 'B2B Exchange',
            text3: `We can offer you full-fledged customs clearance at more than 60+ locations 
                   across the world at important port locations, CFS and warehouses.`
        },
        {
            key: 4,
            id:'strength4',
            image:image_4,
            text1: '7 days a week',
            text2: 'Logistics',
            text3: `Project Cargo is a complex task and we at Delivery Made Easy 
            incare aware of the challenges that come with it`
        },
     ]

      /*Resizable window
      */

       //Generate window width
   const [width, setWidth]=useState(window.innerWidth)
   const [cont_size, setContSize]=useState(window.innerWidth)
   
   useEffect(()=>{

    const handleResize=()=>{
        setWidth( window.innerWidth)
    } 

  
    setContSize(()=>{
        if(width>=1000) {
            return 19   
        }
        else if(width<1000 && width>750){
           return 40
        }
    })
    
    
    window.addEventListener('resize', handleResize);
    return ()=>window.removeEventListener('resize', handleResize);
    
   },[width])

    // Use width values to assign container size
     
  // var cont_size;
  
    



    function KeyStrength(){
       const strength_info=strength_data.map( (el,index) =>{
         
                    return(
                              
                                    <div id={'strength'+index} style={{opacity:0, marginBottom:'50px', paddingLeft:'10px', paddingTop:'20px',paddingRight:'10px', color:'#000', width:`${cont_size}%`, margin:'0px 2px', borderRadius:'5px', boxShadow:'5px 5px 3px yellow', border:'none'}}>
                                                <ScrollAnimate idName={'strength'+index} index={index}/> 
                                                <img style ={{ borderRadius:'5px' ,filter: 'brightness(100%)' ,width :'100%', aspectRatio:'1.9', marginBottom:'25x'}} alt='pics here'src={el.image} />
                                                <p style={{padding:'20px', marginBottom:'1px', fontStyle:'italic',fontWeight:350, fontSize:'15px'}}>{el.text1}</p>
                                                <p style={{padding:'20px', marginBottom:'1px', fontWeight:'600', fontSize:'25px' ,color:'red'}}>{el.text2}</p>
                                                <p style={{padding:'20px', marginBottom:'1px', fontWeight:'400', fontSize:'15px'}}>{el.text3}</p>
                                    </div>
                )
       })

   return strength_info     
    }


    return(
        <div className='strength--container' >
               
             <img src={image3} alt='pics' className='background--image--strength'   />
             
             <p className='why--choose--us'>Why you should choose us?</p>
             <p style={{fontWeight:600, textAlign:'center', fontSize:'27px', marginTop:'20px', color:'rgb(255,50,50)'}}>OUR STRENGTHS AND OUR ADVANTAGES</p>
             <div id='key--strength' style={{display:'flex' ,justifyContent:'space-between', flexWrap:'wrap', fontSize:'10px' ,marginTop:'30px'}}>
                  
                  <KeyStrength   />
                  
            </div>    
        </div>

    )
}
