import './ReachUs.css'


export default function ReachUs(){

    const reach_us_data=[
                         {  
                            a:'',
                            b: ' 5 Montpelier St. London SW7 1EX UK',
                            c: 'Address'
                        },
                        {  
                            a:'tel:',
                            b: '+1(204)4107390',
                            c: 'telephone'
                        },
                        {  
                            a:'mailto:',
                            b: 'info@deliverymadeeasy.com',
                            c: 'support'
                        },
                        ]
    const reach_us=reach_us_data.map(el=>{
        return(
                   <div  style={{margin:'30px'}}>
                        {el.c +` : `}<a href={el.a}className='reach--us'>{el.b}</a>
                   </div> 
        )
    })

    return(
        <div>
             
            <div   
            style={{
                     fontWeight:'500', 
                     fontSize:'25px', 
                     paddingLeft:'0px',paddingRight:'0px' ,
                     color:'#00f', 
                     display:'flex', width:'100%', height:'20%',justifyContent:'center', 
                     alignItems:'center',
                     flexWrap:'wrap',
                     marginBottom:'100px',
                     marginTop:'100px',
                     }} >
                   { reach_us}
            </div>

             
        </div>
    )
}
