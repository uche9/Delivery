
import './NavBar.css';
import logo from "./logo.jpeg";
import {useState, useEffect } from 'react'
import SVGData from '../SVGData/SVGData.js'



export default function NavBar(){
   
    
    //Rendering Nav bar During scrolling
  
   const [scroller, setScroller]=useState(0)
   
   useEffect(()=>{
    
    const handleScroll=()=>{
        setScroller( document.documentElement.scrollTop)
    } 
    
    window.addEventListener('scroll', handleScroll);
    
    return ()=>window.removeEventListener('scroll', handleScroll);
    
   },[scroller]) 

   

   //Rendering Nav Bar During width resize
   const [width, setWidth]=useState(window.innerWidth || 1000)
   
   
   useEffect(()=>{
  

    const handleResize=()=>{
        setWidth( window.innerWidth)
    } 
    
    window.addEventListener('resize', handleResize);
    return ()=>window.removeEventListener('resize', handleResize);
    
   },[width])


  

   /* Generate link with Array */

   const link_array_data=[ 
    {
        place:'HOME',
        way:'home',
    },
    {
        place:'ABOUT US',
        way:'about_us',
    },
    {
        place:'TRACK SHIPMENT',
        way:'track_shipment',
    },
    {
        place:'SERVICES',
        way:'services',
    },
    {
        place:'CONTACT',
        way:'contact',
    },
];
         
    const  link_array=link_array_data.map(el=>{
            return( 
                <>
                         <div  id={el.way}  onClick={()=>setPath(el)}  className='link'>{el.place}</div>                
                   
                </>
                  
                  
            )
         })

               
        /* Function to set path such that new page loads a freash*/
        
         function setPath(el){
            //Scroll to top of new page
            window.location.pathname='/'+ el.way;
        }
         
  
       
    function NavBarSpread ({style1, style2}){
       
       //set tab color for selected tab after page loads
    
      
      return (
                <div id='nav--bar--spread' style={style1}   > 
                      
                        <div className='nav--bar--container'>

                                <img className='logo' src={logo} alt='logo heres' />

                                <div className='link--search'>
                                        <div className='links'>
                                             {link_array}
                                            <div  className='search--icon' >{SVGData[2].code} </div>
                                        </div>
                                </div>
                        </div>
                        <div  className='tab' style={style2}>
                                  
                        </div>         

            </div>
           )
       }

     

         function NavBarShrink ({style1,style2}){

             
              
               const[drop,setDrop]=useState(true)

               function dropMenu(){
                setDrop(false)
               }
               function closeMenu(){
                setDrop(true)
               }

            function LinkArray({style3}){
                return (
                <div className='link--search' style={style3}>
                            <div className='links'>
                                {link_array}
                            </div>
               </div>)
            }
            return (
                      <div id='nav--bar--shrink' style={style1}>
                              <div className='nav--bar--container--shrink'>
                                   <div style={{display:'flex', justifyContent:'space-around',alignItems:'center', width:'100%' , paddingRight:'0px'}}>
                                      <img className='logo' src={logo} alt='logo heres' style={{marginLeft:'30px'}}/>

                                    
                                    <div className='link--search'>
                                         
                                         {drop? 
                                            <div onClick={dropMenu} style={{ marginLeft:'100px',width:'50%'}} >{SVGData[0].code}</div>
                                              :
                                            <div  onClick={closeMenu} style={{marginRight:'15px', width:'30px'}}> {SVGData[1].code}</div>
                                         } 
                                         
                                         
                                    </div>

                                   </div> 
                                   <div>
                                            <div  className=''  style={{display:(!drop? 'block': 'none') }} >
                                                <LinkArray style3={{display:(!drop? 'block': 'none')}} />
                                                <input type='text' className='search--box'  placeholder='search page' />   {SVGData[2].code} 
                                            </div>                                
                                            
                                    </div>
                                                    
                          </div>
                          <div  className='tab' style={style2}>
                                  
                          </div>    
                    </div>
                 )
             }

            

                    
                 
            
            //Change tab color
           
         
    return(
        <>
        
            < div id='nav--bar' style={{width:'100%', height:`${width>900 ? 50 : 40 }px`}}> 
            
            
            {/*Nav Bar Conditional rendering */} 
            
            
            { scroller >=0 &&  width >=900 && <NavBarSpread style1={{ position:'relative', top: '0px'}} style2={{ height:'60px', display:'block',}}/> }
            { scroller>80 &&  width >900  && <NavBarSpread  style1={{  position:'fixed', top:'0px'}}  style2={{  display:'none',}}/>
             }
            { (scroller >=0 &&  width <900) &&  <NavBarShrink style1={{ position:'relative', top: '0px'}} style2={{ height:'69px',  display:'block',}}/>}
            { (scroller>80 &&  width <900) && <NavBarShrink  style1={{ position:'fixed', top: '0px'}} style2={{  display:'none',}}/> }
            
            
        </div>
        </>
        
        
    )
}

 