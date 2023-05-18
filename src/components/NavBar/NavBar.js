import {Link,Outlet} from 'react-router-dom'
import './NavBar.css';
import logo from "./logo.jpeg";
//import search_icon from "../SVGData/search.png";
//import menu_icon from "../SVGData/menu.png";
//import close_icon from "../SVGData/close.png";
import {useState, useEffect } from 'react'
import SVGData from '../SVGData/SVGData.js'



export default function NavBar(){
   

    //Rendering Nav bar During scrolling
  
   const [scroller, setScroller]=useState(document.body.scrollTop)
   
   useEffect(()=>{
    
    const handleScroll=()=>{
        setScroller( document.documentElement.scrollTop)
    } 
    
    window.addEventListener('scroll', handleScroll);
    
    return ()=>window.removeEventListener('scroll', handleScroll);
    
   },[scroller]) 
   //Rendering Nav Bar During width resize
   const [width, setWidth]=useState(window.innerWidth)
   
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
                      
                     <Link    to={'/'+el.way} onClick={()=>handlePath(el)} className='super--link'> 
                         <div  id={el.way} className='link'>{el.place}</div>                
                    </Link> 
                    <Outlet />  
                   
                </>
                  
                  
            )
         })

               
        /* Function to set URL  */
         function handlePath(el){
             //setActiveWay( el.way) 
             //window.location.pathname= active_way;
             
             setTimeout(()=>{
                document.getElementById(el.way).style.backgroundColor='yellow';
                document.getElementById(el.way).style.fontSize='23px';
                document.getElementById(el.way).style.borderRadius='4px';
             },0)  
             
         }
         
  
       
    function NavBarSpread ({style1,style2}){
      
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
                       <div className='tab' style={style2}>
                            
                        </div> 
                    </div>
           )
       }

     

         function NavBarShrink (props){
              
               const[drop,setDrop]=useState(true)

               function dropMenu(){
                setDrop(false)
               }
               function closeMenu(){
                setDrop(true)
               }

            function LinkArray(props){
                return (
                <div className='link--search' style={props.style3}>
                            <div className='links'>
                                {link_array}
                            </div>
               </div>)
            }
            return (
                      <div id='nav--bar--shrink' style={props.style1}>
                              <div className='nav--bar--container--shrink'>
                                   <div style={{display:'flex', justifyContent:'space-around',alignItems:'center', width:'100%' , paddingRight:'0px'}}>
                                      <img className='logo' src={logo} alt='logo heres' style={{marginLeft:'30px'}}/>

                                    
                                    <div className='link--search'>
                                         
                                         {drop? 
                                            <div onClick={dropMenu} style={{width:'30px'}} >{SVGData[0].code}</div>
                                              :
                                            <div  onClick={closeMenu} style={{width:'30px'}}> {SVGData[1].code}</div>
                                         } 
                                         
                                         
                                    </div>

                                   </div> 
                                   <div>
                                            <div  className=''  style={{display:(!drop? 'block': 'none') }} >
                                                <LinkArray style3={{display:(!drop? 'block': 'none')}} />
                                                <input type='text' className='search--box'  placeholder='search page' />   {SVGData[2].code} 
                                            </div>                                
                                            
                                    </div>
                                  
                                       
                              
                              <div className='tab' style={props.style2}>
                                  
                              </div>
                          </div>
                    </div>
                 )
             }


        
         
    return(
        < div style={{paddingLeft:'0px', paddingRight:'0px'}}> 
            
            
            {/*Nav Bar Conditional rendering */} 
            
            
            { scroller >=0 && width >900 && <NavBarSpread/> }
            { scroller>150 &&  width >900 && <NavBarSpread  style1={{ position:'fixed', top:'0px'}} style2={{display:'none'}}/> }
            { scroller >=0 && width <900 &&  <NavBarShrink />}
            { scroller>150 &&  width <900 && <NavBarShrink  style1={{ position:'fixed', top: '0px'}} style2={{display:'none'}}/> }
            
            
        </div>
        
    )
}

 