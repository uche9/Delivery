import './Expertise.css';

export default function Expertise(){

function ProgressBar(){

    const progress_data =[
        {
           key:1,
           expertise:'Experience',
           level:'70%'
        },
        {
            key:2,
            expertise:'Skill',
            level:'60%'
         },
         {
            key:2,
            expertise:'margin',
            level:'75%'
         },
         {
            key:2,
            expertise:'Speed',
            level:'100%'
         }


    ]

            const progress_bar=progress_data.map(el=>{
                
                return(
                    <div className='bars' style={{marginLeft:'100px'}}>
                                            <label for='bar1' style={{color:'#222', fontStyle:'italic', fontSize:'20px'}}>{el.expertise}</label>
                                            <br />
                                            <div style={{width:'500px', height:'20px', backgroundColor:'#aaa'}}  >
                                                <div style={{width:(el.level), height:'20px', backgroundColor:'#f00', display:'flex', justifyContent:'flex-end' , alignItems:'center'}} >
                                                    <div style={{fontSize:'18px'}}>{el.level}</div>
                                                </div>
                                            </div>
                                        </div>
                )
            })

    return progress_bar
    }
   


    function Testimonial(){
        
        const testimonial_data =[
            {
               key:1,
               case:'Finished Projects',
               number:'1234',
               message:`We're there for you anytime you need us. Contact us for a consultation,
               estimate or any question you might have about your project or our work.`
            },
            {
                key:2,
                case:'Satisfied Clients',
                number:'613',
                message:`We're there for you anytime you need us. Contact us for a consultation,
                estimate or any question you might have about your project or our work.`
             }
        ]

                const testimonial=testimonial_data.map(el=>{
                
                return(
                        <div  className='testimonials' style={{width:'500px',height:'250px', display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'space-between'}}>            
                                    
                                    <div style={{fontSize:'85px' , color:'#f22', fontWeight:'600'}}>
                                            {el.number}
                                    </div>
                                    <div style={{fontSize:'27px', fontStyle:'italic' , color:'#111'}}>
                                            {el.case}
                                    </div>
                                    <div style={{textAlign:'center', color:'#000', fontSize:'18px'}}>
                                            {el.message}
                                    </div>                    
                        </div>
                    )
                })          
     return   testimonial        
   }

    

    return(
        <div className='expertise--container'>
                  <div className='peace'>Peace of Mind</div>
                  <div className='expert'>OUR EXPERTISE</div>
                  <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between', }}>
                            <div>  
                                  <div style={{display:'flex' }}>
                                            <div>
                                                <div style={{fontSize:'200px',marginTop:'-60px' , transform: 'rotate(180deg)'}}>,,</div>
                                            </div>
                                            <div className='quote'  style={{ padding:'5px', color:'#444', marginLeft:'5px' , width:'600px'}}>
                                            {`Delivery Made Easy Inc, through continuous Innovation, relentless pursuit 
                                            for Excellence, Efficiency, Foresight and un-matched execution capabilities along 
                                            with personalized services, has emerged as the leading single window service provider
                                            in offering Integrated and turnkey services in Shipping, Logistics, Indirect Taxation 
                                            matters and International Trade`}
                                            </div>
                                  </div>
                                    
                                    <div className='icons'>
                                           { ['icon1', 'icon2' ,'icom3', 'icon4']}
                                    </div>
                            </div>
                            <div>
                                 <ProgressBar />
                            </div>
                            
                  </div>  
                  <div style={{marginTop:'50px'}}>
                         car separator Icon
                  </div>      
                  <div  style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'80px' }}>
                       <Testimonial />
                       
                  </div>          
                  
        </div>
    )
}