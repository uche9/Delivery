import './Receipt.css'
import logo from './logo.jpeg'
import background_image from  './logo.jpeg'
import stamp from './stamp.jpeg'


export default function Receipt({data}){

    

    return(
        <div  className='receipt--container'>
             <img src={background_image} alt='b pics' style={{width:'100%', position:'absolute' , zIndex:'-1'}} />
      
            
                 <div className='receipt--form' style={{width:'95%'}}>
                         <div className='receipt' style={{marginBottom:'20px' ,textAlign:'center'}}>
                            RECEIPT
                         </div>
                         <div className='part--A' style={{borderColor:'red', borderStyle:'solid'}}>
                                <div className='heading'>
                                    <div className='receipt--logo'>
                                            <img src={logo} alt='logo' style={{width:'200px'}}/>
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column' , justifyContent:'space-evenly', fontWeight:'800'}}>
                                            <div style={{fontSize:'30px', textAlign:'center'}}>DELIVERY MADE EASY</div>
                                            <div style={{display : 'flex', justifyContent:'flex-end'}}> 
                                                  <div>AIR WAYBILL</div>
                                            </div>
                                    </div>
                                </div>
                                
                                
                                 <div className='part--A--left' style={{ backgroundColor:'green' , width:'100%'}}>
                                            <div className='sender'>
                                                <div style={{ fontWeight:'bold',fontSize:'18px'}}>
                                                {`1. FROM (SENDER)`} 
                                                </div>
                                                <div style={{backgroundColor:'#fff'}}>
                                                            <div>
                                                                <span><b>Sender Name:</b></span><span className='data--details'>{data.sender.senderName}</span> 
                                                            </div>
                                                            <br />
                                                            <div>
                                                                <span><b>Sender reference:</b></span><span className='data--details'>{data.sender.senderReference}</span>
                                                            </div>
                                                            <br />
                                                            <br />
                                                            <div>
                                                                <span><b>Address:</b></span><span className='data--details'>{data.sender.address}</span>
                                                            </div>
                                                            <br /> 
                                                            <div style={{display:'flex'}}>
                                                                <div className='zipcode'><b>Zipcode:</b><span className='data--details'>{data.sender.zipcode}</span></div>
                                                                <div className='country'><b>Country:</b><span className='data--details'>{data.sender.country}</span></div>
                                                            </div>
                                                </div>


                                            </div>
                                            <div className='receiver'>
                                                        <div style={{ fontWeight:'bold',fontSize:'18px'}}>
                                                            {`2. TO(RECEIVER)`} 
                                                        </div>
                                                        <div style={{backgroundColor:'#fff'}}>
                                                                <div>
                                                                    Receiver Name:<span className='data--details'>{data.receiver.receiverName}</span>
                                                                </div>
                                                                <br />
                                                                <div>
                                                                    Delivery Declaration:<span className='data--details'>{data.receiver.deliveryDeclaratio}</span>
                                                                </div>
                                                                <br />
                                                                <div style={{display:'flex'}}>
                                                                    <div className='zipcode'>Zipcode:<span className='data--details'>{data.receiver.zipcode}</span></div>
                                                                    <div className='country'>Telephone:<span className='data--details'>{data.receiver.country}</span></div>
                                                                </div>
                                                        </div>
                                            </div>
                                            <div className='authorization'>
                                                <div style={{ fontWeight:'bold',fontSize:'18px'}}>
                                                    {`3. SENDER AUTHORIZATION `} 
                                                </div>
                                                <div className='autho'>
                                                        <div>
                                                            <br />
                                                            
                                                            {`I/We agree that Delivery Made Easy standard Terms apply`}
                                                            <br />
                                                            
                                                        </div>                   
                                                        <div style={{display:'flex',width:'100%'}}>
                                                            
                                                            <div className='signature'>
                                                                Signature: <img src={stamp} alt='receipt' className='stamp'  />
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className='part--A--right' style={{ backgroundColor:'orange' , width:'100%'}}>
                                               <div className='airwaybill-code' style={{ backgroundColor:'#fff', width:'100%', height:'10%'}}>
                                                     <div>
                                                          Air Waybill Number
                                                    </div>
                                                    <br />
                                               </div>
                                               <div  style={{ backgroundColor:'', width:'100%', height:'45%'}}>
                                                     <div style={{ fontWeight:'800',fontSize:'18px', width:'100%' , }}>
                                                          4. SHIPMENT DETAILS
                                                    </div>
                                                    <div className='shipment--details' style={{width:'99.9%', height:'' , backgroundColor:'#fff', fontWeight:'bold', fontStyle:'italic'}}>
                                                        All payments and sevices are available in selected countries
                                                    </div>
                                                    <div style={{ display:'flex', justifyContent:'center', margin:'2px', backgroundColor:'#fff', width:'99%', height:'auto'}}>
                                                         <div style={{width:'55%', margin:'2px'}}>
                                                            <div style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'yellow' , height:'100%'}}>
                                                                 <span><b>Services</b></span>
                                                                 <div>Diplomatic Document: <span className='data--details'>{data.shipmentDetails.services.diplomaticDocument}</span></div>
                                                                 <div>World Wide Diplomatic Document: <span className='data--details'>{data.shipmentDetails.services.worldWideDiplomaticDocument}</span></div>
                                                                 <div>Domestic Package : <span className='data--details'>{data.shipmentDetails.services.domesticPackage}</span></div>
                                                                 <div>World Mail : <span className='data--details'>{data.shipmentDetails.services.worldMail}</span></div>
                                                                 <div>Other Service :<span className='data--details'>{data.shipmentDetails.services.otherService}</span> </div>
                                                                 <br />
                                                            </div>
                                                        </div>
                                                        <div style={{width:'45%', margin:'2px'}}>
                                                             <div style={{ backgroundColor:'yellow', height:'auto'}}>
                                                                <span><b>Sending Fee</b></span>
                                                                <div>Receiver: <span className='data--details'>{data.shipmentDetails.sendingFee.receiver}</span></div>
                                                                <div>Cash Or Check Or Credit Card: <span className='data--details'>{data.shipmentDetails.sendingFee.cashOrCheckOrCreditCard}</span> </div>
                                                                <div>External Billing Arrangement: <span className='data--details'>{data.shipmentDetails.sendingFee.externalBillingArrangement}</span> </div>
                                                             </div>
                                                             <div style={{ backgroundColor:'yellow', height:'27%', marginTop:'4px'}}>
                                                                Shipment Insurance :<span className='data--details'>{data.shipmentDetails.shipmentInsurance}</span>
                                                             </div>
                                                             
                                                        </div>
                                                    </div>
                                                    <div style={{padding:'2px' , height:'55%'}}>
                                                            <div style={{backgroundColor:'#fff' ,width:'100%', height:'50%', marginBottom:'4px'}}  >
                                                                Description of Cargo : <span className='data--details'>{data.shipmentDetails.descriptionOfCargo}</span>
                                                            </div>
                                                            <div style={{backgroundColor:'', fontWeight:'bold', fontSize:'20px',width:'100%', height:'98%'}}  >
                                                                5. SECURITY CHECKED:
                                                                <div style={{backgroundColor:'#fff' ,width:'100%', height:'40%', marginBottom:'4px'}}  >
                                                               Status : <span className='data--details'>{""}</span>
                                                                 </div>  
                                                            </div>
                                                            
                                                            
                                                    </div>
                                                    
                                                    
                                               </div>
                                              
                                        </div>
                                </div>
                                
                                
                        

                        <div className='part--B' style={{width:'100%', backgroundColor:'red'}}>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'8%'}}>
                                      <div style={{backgroundColor:'#fff', width:'49%' , margin:'2px'}}>
                                           Origin : <span className='data--details'>{data.origin}</span>
                                      </div>
                                      <div style={{backgroundColor:'yellow', width:'49%' , margin:'2px'}}>
                                           Destination :<span className='data--details'>{data.destination}</span>
                                      </div>
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:''}}>
                                      <div style={{backgroundColor:'#f00', width:'49%' , margin:'2px', fontWeight:'bold'}}>
                                           6. SIZE AND WEIGHT
                                      </div>
                                      
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'8%'}}>
                                      <div style={{backgroundColor:'#fff', width:'49%' , margin:'2px'}}>
                                           Number of Pieces :<span className='data--details'>{data.sizeAndWeight.numberOfPieces}</span>
                                      </div>
                                      <div style={{backgroundColor:'yellow', width:'49%' , margin:'2px'}}>
                                           Weight : <span className='data--details'>{data.sizeAndWeight.weight}</span>
                                           <br />
                                           <br />
                                      </div>
                               </div>
                               
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'10%'}}>
                                      <div style={{backgroundColor:'#fff', width:'99%' , margin:'2px'}}>
                                           Volumetric/Charged Weight
                                      </div>
                                     
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'5%'}}>
                                      <div style={{backgroundColor:'#fff', width:'49%' , margin:'2px'}}>
                                           Shipment : 
                                      </div>
                                      <div style={{backgroundColor:'yellow', width:'49%' , margin:'2px'}}>
                                      <span className='data--details'>{data.volumetricChargedWeight.shipment}</span>
                                      </div>
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'5%'}}>
                                      <div style={{backgroundColor:'', width:'49%' , margin:'2px'}}>
                                           Handling Charges:
                                      </div>
                                      <div style={{backgroundColor:'yellow', width:'49%' , margin:'2px'}}>
                                      <span className='data--details'>{data.volumetricChargedWeight.handlingCharges}</span>
                                      </div>
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'5%'}}>
                                      <div style={{backgroundColor:'#fff', width:'49%' , margin:'2px'}}>
                                           Total Charges:
                                      </div>
                                      <div style={{backgroundColor:'yellow', width:'49%' , margin:'2px'}}>
                                      <span className='data--details'>{data.volumetricChargedWeight.totalCharges}</span>
                                      </div>
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'5%'}}>
                                      <div style={{backgroundColor:'', width:'49%' , margin:'2px'}}>
                                           Currency Code:
                                      </div>
                                      <div style={{backgroundColor:'yellow', width:'49%' , margin:'2px'}}>
                                      <span className='data--details'>{data.volumetricChargedWeight.currencyCode}</span>
                                      </div>
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'5%'}}>
                                      <div style={{backgroundColor:'#fff', width:'49%' , margin:'2px'}}>
                                           Sender Paid:
                                      </div>
                                      <div style={{backgroundColor:'yellow', width:'49%' , margin:'2px'}}>
                                      <span className='data--details'>{data.volumetricChargedWeight.senderPaid}</span>
                                      </div>
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'5%'}}>
                                      <div style={{backgroundColor:'', width:'49%' , margin:'2px'}}>
                                           Total Balance:
                                      </div>
                                      <div style={{backgroundColor:'yellow', width:'49%' , margin:'2px'}}>
                                      <span className='data--details'>{data.volumetricChargedWeight.totalBalance}</span>
                                      </div>
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'5%'}}>
                                      <div style={{backgroundColor:'#fff', width:'99%' , margin:'2px'}}>
                                           Receiver to pay balance on delivery
                                      </div>
                                      
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'35%' }}>
                                      <div style={{backgroundColor:'#fff',
                                                   width:'99%' , 
                                                   margin:'2px',
                                                  display:'flex', flexDirection:'column',justifyContent:'space-between', padding:'4px'  }}>
                                           <div style={{borderColor:'red', borderStyle:'solid', height:'25%'}}>
                                                  PACKED BY : <span><b>DELIVERY MADE EASY</b> </span>
                                           </div>
                                           <div style={{borderColor:'red', borderStyle:'solid', height:'20%'}}>
                                                 ROUTE No: <span className='data--details'>{data.routeNumber}</span>
                                           </div>
                                           <div style={{borderColor:'red', borderStyle:'solid', height:'20%'}}>
                                                 DATE: <span className='data--details'>{data.date}</span>
                                           </div>
                                           <div style={{borderColor:'red', borderStyle:'solid', height:'auto'}}>
                                                 <b>Disclaimer :</b>{` Local charges to be paid by by receiver.
                                                Dumurrage Charge applies after 3 days of failing to
                                                pay local charges. Losses or damages on items on transit shall not be borne by DME.
                                                Client will take responsibility accordingly `}
                                           </div>
  
                                      </div>
                                      
                               </div>
                               <div className="shipment--status">
                                     SHIPMENT STATUS
                    
                              </div>
                              <div className='super--message'>
                                       <div className={data.status==='yes'? 'status--message--container':'status--message--container--alt' }>
                                           {data.statusMessage}   
                                          </div>
                              </div>  
                        </div>
                        
                 </div>
                <hr />    
                
                         
        </div>
    )
}