/*
import './ScrollAnimate.css'
import {useState,useEffect} from 'react'

*The role of this function is to animate an element by changing element class list
*when scrolled into view
*/

/*Bounding rectangle 


export default function ScrollAnimate(idName){

     
    
    const [rect_1,setRect_1]=useState(idName)

   
   useEffect((idName)=>{
    window.addEventListener('scroll',handleScroll(idName));

    function handleScroll(idName){
        //let newRect=document.getElementById(idName).getBoundingClientRect()
        // setRect_1(prevRect=>newRect);
      }  

    return ()=> window.addEventListener('scroll',handleScroll(idName));
   },)

   
         

    return(                  
            
                 {
                    status : rect_1.top>0 && rect_1.bottom<window.innerHeight ? 'yes':'no' ,
                    box: <div style={{width:'30px' , height:'30px', backgroundColor:'red', position:'fixed'}}></div>
                 }                                
    )
} */