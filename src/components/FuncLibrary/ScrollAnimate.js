
import './ScrollAnimate.css'
import {useState,useEffect} from 'react'
/*
*The role of this function is to animate an element by changing element class list
*when scrolled into view
*/




export default function ScrollAnimate(idName){

     
  const [rect,setRect]=useState({
                                  top:0 ,
                                  bottom:0,       
                                 })
    
   

   
   useEffect(()=>{
     
      var element=document.getElementById (idName)
      window.addEventListener('scroll',handleScroll)
    
      function handleScroll(){
       
         
         setRect(element.getBoundingClientRect())
      }  

   
  
    return ()=> window.addEventListener('scroll',handleScroll);
   }, [idName])



    return(  
      
            
            rect.top>0 && rect.bottom < window.innerHeight ? 'v': 'nv'
        
                                                    
    )
} 