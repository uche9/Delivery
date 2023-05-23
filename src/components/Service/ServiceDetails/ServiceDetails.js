import './ServiceDetails.css'
import SVGData from '../../SVGData/SVGData'
import { ServiceDetailsData } from './ServiceDetailsData.js'




export default function ServiceDetails({myId}){
    return(
        <div className='conatainer--service--details'>
            <div className='super--container'>
                  <img src={ServiceDetailsData[myId].bImage_1} alt='back-pics' className="background-image-1" /> 
                        <div className="container--welcome--service"> 
                                <p className='upper--text--service'>{ServiceDetailsData[myId].upperText}</p>
                                <div className='underline--service' ></div>
                                <p className='lower--text--service'>{ServiceDetailsData[myId].lowerText}</p>
                        </div>
            </div>
            <div className='more--details--container'>
                <div className='head'>
                {ServiceDetailsData[myId].head}
                </div>
                <div style={{margin:'20px' , display:'flex', width:'60%'}}>
                        <span> {SVGData[6].code}</span>
                        <span className='upper--para' >
                        {ServiceDetailsData[myId].upperPara}
                        </span>
                       
                </div>
                
                <div>
                   <img src={ServiceDetailsData[myId].paraImage} className='image--para' alt='pics'></img>
                </div>   
                
                <p className='lower--para'>
                {ServiceDetailsData[myId].lowerPara}
                </p>
            </div>
              
        </div>
    )
}