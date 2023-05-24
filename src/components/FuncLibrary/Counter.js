import {useState,useEffect} from 'react'

export default function Counter({limit,countInterval}){
    
    const[ count, setCount]=useState(0);

    

        useEffect(()=>{

            
              
             setTimeout(()=>{
             if (count >limit-1)  {
                setCount(count)
             }
             else{
                setCount(count+1)
             }
            
           
             },countInterval)
            
            

        },[count,limit,countInterval ])
        
        


    return(
            <div>
                {count}
            </div>
    )
}

