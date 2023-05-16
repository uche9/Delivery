
import {Link,Outlet} from 'react-router-dom'
import './Footer.css';
import logo from './logo.jpeg'
export default function Footer(){


      const our_fleet_array_data=['B2B Exchange', 'Delivery','Logistics','Shipping'];
      const our_fleet_array=  our_fleet_array_data.map(el=>{
        return(
            <div className='footer--link'>
                  {el}
            </div> 
        )
      }) 
      
      const our_link_array_data=[{a:'Home', b:'home'},{ a:'Contact Us', b:'contact'} ];
      const our_link_array=  our_link_array_data.map(el=>{
        return(
           <>
               <Link  to={'/'+el.b} >
                   <div className='footer--link'>
                        {el.a}
                   </div> 
               </Link>
               <Outlet />
           </>
          
        )
      })  


      function LinkDetails(props){
        return(
            <div  >
                            <div style={{marginBottom:'20px',color:'#f33', fontWeight:'600' , fontSize:'28px'}}>
                                 {props.head}
                            </div>
                            <div style={{width:'80px', backgroundColor:'#fff', height:'3px', marginBottom:'20px'}}>

                             </div>
                             <div style={{fontSize:'19px', color:'#fff'}}>
                                   {props.details}
                             </div>
                            
                       </div>
        )
      }

    return(
        <div className="footer--container">
                <div>
                     <div style={{margin:'20px'}}  >
                        <img src={logo}  alt='logo here' style={{width:'300px', height:'100px', zIndex:'+1', borderRadius:'4px'}}/>
                    </div>
                    <div style={{width:'400px' , color:'#fff', marginBottom:'30px', }}>
                    {`Delivery Made Easy  has remained fully dedicated to meeting their customer
                    logistics and transportation needs. Delivery Made Easy carefully evaluates each
                    customer and determines how to most efficiently meet those needs, while minimizing 
                    cost & maximizing revenues.`}
                    </div>
                    <div style={{ color:'#fff', marginBottom:'30px'}}>
                        {`Copyright @ Delivery Made Easy. All rights reserved`}
                    </div>
                </div>  
                <div>

                <div className='more--detail--container' style={{display:'flex' , flexDirection:'row', justifyContent:'space-between', width:'400px'}}>
                       
                     <LinkDetails head={'Our Fleet'}  details={our_fleet_array}  />   
                     <LinkDetails head={'Quick Links'}  details={our_link_array}  />  

                </div>
                     
        </div>

    </div>
    )
}