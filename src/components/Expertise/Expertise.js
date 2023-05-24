import './Expertise.css';
import ScrollAnimate from '../FuncLibrary/ScrollAnimate';
import Counter from '../FuncLibrary/Counter';
export default function Expertise(){

function ProgressBar(){

    const progress_data =[
        {
           key:1,
           expertise:'Experience',
           level:70
        },
        {
            key:2,
            expertise:'Skill',
            level:60
         },
         {
            key:3,
            expertise:'Margin',
            level:75
         },
         {
            key:4,
            expertise:'Speed',
            level:100
         }


    ]
          //ScrollAnimate('bars'+index)==='v' ? <Counter countInterval={1} limit={el.level}/> : 0
          //el.level
            const progress_bar=progress_data.map((el,index)=>{
                
                return(
                    <div className='bars' id={'bars'+index} style={{marginBottom:'20px', marginLeft:'0px'}}>
                                            <label for='bar1' style={{color:'#222', fontStyle:'italic', fontSize:'14px', fontFamily:'cursive'}}>{el.expertise}</label>
                                            <br />
                                            <div style={{width:'250px', height:'18px', backgroundColor:'#aaa',}}  >
                                                <div style={{width:  `${el.level}%`, 
                                                             height:'20px', backgroundColor:'#f00', display:'flex', justifyContent:'flex-end' , alignItems:'center'}} >
                                                    <div style={{fontSize:'14px'}}>{  `${el.level} %`}</div>
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
                        <div id="testimonials" className='testimonials' style={{padding:'30px',width:'80%', display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'space-between'}}>            
                                    
                                    <div style={{fontSize:'85px' , color:'#f22', fontWeight:'600'}}>
                                    {  ScrollAnimate('testimonials')==='v' ? < Counter limit={el.number} countInterval={1} />: el.number} 
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
                  <div style={{display:'flex', padding:'30px' , alignItems:'center' , justifyContent:'center', }}>
                            <div>  
                                  <div style={{width:'100%', display:'flex', justifyContent:'center',flexWrap:'wrap',}}>
                                            <div style={{width:'50%',padding:'30px', marginBottom:'50px', margin:'20px', display:'flex'}}>
                                                    
                                                    <div className='quote'  style={{ padding:'5px', color:'#444', marginLeft:'5px' , width:'100%'}}>
                                                    {`Delivery Made Easy Inc, through continuous Innovation, relentless pursuit 
                                                    for Excellence, Efficiency, Foresight and un-matched execution capabilities along 
                                                    with personalized services, has emerged as the leading single window service provider
                                                    in offering Integrated and turnkey services in Shipping, Logistics, Indirect Taxation 
                                                    matters and International Trade`}
                                                    </div>
                                            </div>         
                                            <div style={{width: 'auto'}}>
                                               <ProgressBar />
                                            </div>
                                  </div>
                                    
                                    <div className='icons'>
                                           { }
                                    </div>
                            </div>
                            
                            
                  </div>  
                  <div style={{marginTop:'50px' ,height:'3px', width:'80%', backgroundColor:'yellow'}}>
                         
                  </div>      
                  <div  style={{display:'flex',width:'80%',paddingRight:'50px', paddingLeft:'50px', justifyContent:'center', alignItems:'center', marginTop:'80px' , flexWrap:'wrap'}}>
                       <Testimonial />
                       
                  </div>          
                  
        </div>
    )
}