import './ReachUs.css';
import SVGData from '../SVGData/SVGData.js'

export default function ReachUs(){

    const reach_us_data=[
                         {  
                            contactType:'ADDRESS',
                            icon: SVGData[3].code ,
                            details: '5 Montpelier St. London SW7 1EX UK'
                        },
                        {  
                            contactType:'PHONE',
                            icon:SVGData[4].code ,
                            details: '+1(204)4107390',
                            
                        },
                        {  
                            contactType:'EMAIL',
                            icon:SVGData[5].code ,
                            details: 'info@deliverymadeeasy.online',
                        },
                        ]
    const reach_us=reach_us_data.map(el=>{
        return(

              <div style={{display:'flex', marginBottom:'30px' , width:'33%' , minWidth :'400px'}}>
                       <div style={{margin: '5px',display: 'flex', justifyContent:'center', alignItems:'center' ,backgroundColor:'red', width:'50px' , aspectRatio:1, borderRadius:'50%'}}>
                       <div style={{margin: '5px',display: 'flex', justifyContent:'center', alignItems:'center' ,backgroundColor:'yellow', width:'50px' , aspectRatio:1, borderRadius:'50%'}}>
                          {el.icon}
                       </div>
                       </div>
                       <div  style={{}}>
                            <div  style={{fontSize:'16px'}}>
                                {el.contactType}
                            </div>
                            <div  style={{fontSize:'14px'}}>
                                {el.details}
                            </div>
                       </div>
              </div>
                    
        )
    })

    return(
        <div style={{backgroundColor:'#ccc'}}>
             
            <div   
            style={{
                     fontWeight:'500', 
                     fontSize:'25px', 
                     paddingLeft:'10%',paddingRight:'10%' ,
                     color:'#00f', 
                     display:'flex', width:'100%',justifyContent:'center', 
                     alignItems:'center',
                     flexWrap:'wrap',
                     marginBottom:'10px',
                     marginTop:'10px',
                     }} >
                   { reach_us}
            </div>

             
        </div>
    )
}
