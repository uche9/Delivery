
import {Link,Outlet} from 'react-router-dom'
import './Footer.css';
import logo from './logo.jpeg'
export default function Footer(){


      const our_fleet_array_data=[
         {a:'B2B Exchange', b:'b2b_exchange'},
         {a:'Courier Delivery',b:'courier_delivery'} ,
         {a:'Logistics', b:'logistics'}
        ];
      const our_fleet_array=  our_fleet_array_data.map(el=>{
        return(
            <>
               <Link  to={'/service/'+el.b} >
                   <div className='footer--link' style={{margin:'20px', fontSize:'15px', color:'#fff'}}>
                        {el.a}
                   </div> 
               </Link>
               <Outlet />
            </>
        )
      }) 
      
      const our_link_array_data=[{a:'Home', b:'home'},{ a:'Contact Us', b:'contact'} ];
      const our_link_array=  our_link_array_data.map(el=>{
        return(
           <>
               <Link  to={'/'+el.b} >
                   <div className='footer--link' style={{margin:'20px', fontSize:'15px', color:'#fff'}}>
                        {el.a}
                   </div> 
               </Link>
               <Outlet />
           </>
          
        )
      })  


      function LinkDetails(props){
        return(
                   <div  style={{width:'60%', color:'#fff'}}>
                            <div style={{marginBottom:'20px',color:'#f33', fontWeight:'600' , fontSize:'28px'}}>
                                 {props.head}
                            </div>
                            <div style={{width:'130px', backgroundColor:'#fff', height:'3px', marginBottom:'20px', fontSize:'10px'}}>

                             </div>
                             <div style={{fontSize:'15px', color:'#fff'}}>
                                   {props.details}
                             </div>
                            
                    </div>
        )
      }

    return(
        <div className="super--footer--container">
                 <div className='footer--container' style={{display:'flex', alignItems:'center', margin:'0px'}}>
                    <div style={{width:'45%'}}>
                        <div style={{margin:'5px' }}  >
                            <img src={logo}  alt='logo here' style={{width:'80%',  zIndex:'+1', borderRadius:'4px'}}/>
                        </div>
                        <div style={{width:'80%' ,margin:'5px', fontSize:'14px', fontWeight:'180',color:'#fff', marginBottom:'30px', }}>
                        {`Delivery Made Easy  has remained fully dedicated to meeting their customer
                        logistics and transportation needs. Delivery Made Easy carefully evaluates each
                        customer and determines how to most efficiently meet those needs, while minimizing 
                        cost & maximizing revenues.`}
                        </div>
                        
                       
                    </div>  
                    
                        
                    <div className='more--detail--container' style={{display:'flex',flexWrap:'wrap', justifyContent:''}}>
                              
                        <LinkDetails head={'Our Fleet'}  details={our_fleet_array}  /> 
                        <LinkDetails head={'Quick Links'}  details={our_link_array}  />       
                   </div>
                        
                  
        </div>

        <div style={{ textAlign:'center', width:'100%',color:'#fff', marginBottom:'10px'}}>
                        {`Copyright @ Delivery Made Easy. All rights reserved`}
         </div>

    </div>
    )
}