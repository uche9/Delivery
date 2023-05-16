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
            image:image_1,
            text1: 'Around the world',
            text2: 'Shipping',
            text3: `At Delivery Made Easy we are assured of a highly reliable, 
                   world class and extensively networked global Sea Freight service.`

        },
        {  
            key: 2,
            image:image_2,
            text1: '24hr a day',
            text2: 'Courier Delivery',
            text3: `We offer a highly flexible airport-to-airport or a door to door 
                   service on domestic as well as international routes that match your needs and schedules.`
        },
        {
            key: 3,
            image: image_3,
            text1: 'New Service',
            text2: 'B2B Exchange',
            text3: `We can offer you full-fledged customs clearance at more than 60+ locations 
                   across the world at important port locations, CFS and warehouses.`
        },
        {
            key: 4,
            image:image_4,
            text1: '7 days a week',
            text2: 'Logistics',
            text3: `Project Cargo is a complex task and we at Delivery Made Easy 
            incare aware of the challenges that come with it`
        },
     ]



    function KeyStrength(){
       const strength_info=strength_data.map( el =>{
         
                    return(
                              
                                    <div style={{ padding:'10px', color:'#000',opacity:'1', width:'250px', margin:'0px 30px', borderRadius:'5px', boxShadow:'5px 5px 3px yellow', border:'none'}}>
                                                <img style ={{width :'100%', height:'150px'}} alt='pics here'src={el.image} />
                                                <p style={{ marginBottom:'15px', fontStyle:'italic',fontWeight:500, fontSize:'18px'}}>{el.text1}</p>
                                                <p style={{marginBottom:'15px', fontWeight:'900', fontSize:'30px' ,color:'red'}}>{el.text2}</p>
                                                <p style={{marginBottom:'10px', fontWeight:'500', fontSize:'18px'}}>{el.text3}</p>
                                    </div>
                )
       })

   return strength_info     
    }


    return(
        <div className='strength--container' >
             <img src={image3} alt='pics' className='background--image--strength'   />
             <p style={{ fontSize:'20px' , fontWeight:500, marginBottom:'10px', fontStyle:'italic'}}>Why you should choose us?</p>
             <p style={{fontWeight:800, fontSize:'40px', marginTop:'20px', color:'rgb(255,50,50)'}}>OUR STRENGTHS AND OUR ADVANTAGES</p>
             <div  style={{display:'flex' ,justifyContent:'space-around', flexWrap:'wrap', fontSize:'10px' ,marginTop:'30px'}}>
                  
                  <KeyStrength  />
            </div>    
        </div>

    )
}
