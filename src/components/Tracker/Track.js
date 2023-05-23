import Receipt from '../Receipt/Receipt.js'
import './Track.css'
import tracking_data from './TrackerData.js'
import {useState} from 'react'

export  default function Track(){

   
  const [entry, setEntry]=useState( '')
  var client_data=[];
  var feedback;
  var response;
 var search_permit=false

// Use onchange and controlled form element to instantly generate responses
function handleChange(event){
  setEntry(event.target.value)
}

   
   if (entry.length===0){
    response='Enter Data'
   }
   else if(entry.length>0 && entry.length<6){
    response='Incomplete Data';
   }
   else if (entry.length===6){
    response='Entry validated, checking database...'
    search_permit=true
   }
   else{
    response='invalid entry'
   }

 //Checking database to fetch data
 
  
 if (search_permit===true){

   client_data=tracking_data.filter(el=>{
      return(entry===el.sender.trackingId )
   })

   if (client_data.length===0){
    feedback='RECORD NOT FOUND!'
   }
   else if (client_data.length===1 ){
    feedback='RECORD FOUND...GENERATING DETAILS'
    //Clear value memory
    
   }
   else{
    feedback='ERROR'
    
   }
 }




  

 return(
         <div className='tracker--container'>

              
              <div>
                 <div className='portal'>
                     TRACKER PORTAL
                 </div>
                 
                
                
             </div>
             <div>
                      <input type='text' onChange={handleChange} placeholder='Enter Tracking Id' id='tracker' className='tracker'  value={entry}/>
              </div>
              <div >
                 ... <span style={{fontSize:'20px'}}>{response}</span>                
               </div>
               { search_permit && <div style={{fontSize:'17px', fontWeight:'600' , textAlign:'center'}}>{feedback}</div>}
               { search_permit && client_data.length===1 && <Receipt xx={2}  data={client_data[0]}  />}
               
         </div>
 )
}   