import './ScrollAnimate.css'
import {useState,useEffect} from 'react'
/*
*The role of this function is to animate an element by changing element class list
*when scrolled into view
*/

/*Bounding rectangle */


export default function ScrollAnimate({idName}){

     
    
    const [rect_1,setRect_1]=useState('')

   
   useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

    return ()=> window.addEventListener('scroll',handleScroll);
   },)

   function handleScroll(){
    
    setRect_1(prevRect=>document.getElementById(idName).getBoundingClientRect());
    
   }

  

    return(                  
                <>
                   
                    { /* Add or remove animation class*/ 
                     rect_1.top>0 && rect_1.bottom<window.innerHeight ?
                     document.getElementById(idName).classList.add('ani--strength--info'):
                     document.getElementById(idName).classList.remove('ani--strength--info')
                    }

                </>
                                     
    )
}