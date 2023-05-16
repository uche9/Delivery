 const tracker_data=[
    {  
       Id:'1',
       sender:{
         trackingId:'123abc',
         senderName: 'Mary Jane',
         senderReference:'abc718pjk',
         address:'',
         zipcode:'',
         country:''
       },
       receiver:{
         receiverName:'Silas Jude',
         deliveryDeclaration:'',
         zipcode:'',
         telephone:'',
       },
       senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

       wayBillCode:{
         image:'',
         values:'',
       },
       shipmentDetails:{
         services:{
           diplomaticDocument:'', /* Yes or No*/
           worldWideDiplomaticDocument:'', /* Yes or No*/
           domesticPackage:'', /* Yes or No*/
           worldMail:'',/* Yes or No*/
           otherService:'', /*Specify*/
         },
         sendingFee:{
            receiver:'',/* Yes or No*/
            cashOrCheckOrCreditCard:'',/* Yes or No*/
            externalBillingArrangement:'',/* Yes or No*/
         },
         shipmentInsurance:'y', /* Yes or No*/
         descriptionOfCargo:'Personal Belonging',
       },
       securityChecks:{
           harmonizedCommunityCode:'', /* Yes or No*/
           typeOfExport:{
              temporary:'', /* Yes or No*/
              permanent:'', /* Yes or No*/
              repairReturn:'', /* Yes or No*/
           }
       },
       origin:'Nigeria',
       destination:'USA',
       sizeAndWeight:{
         numberOfPieces:'6',
         weight:'2kg',
       },
       volumetricChargedWeight:{
         shipment:'28990',
         handlingCharges:'',
         totalCharges:'',
         currencyCode:'',
         senderPaid:'',
         totalBalance:'', 
       },
       routeNumber:'',
       date:'3rd June',        
    },
    {  
      Id:'2',
      sender:{
        trackingId:'321zzz',
        senderName: 'Peter Jane',
        senderReference:'abc718pjk',
        address:'',
        zipcode:'',
        country:''
      },
      receiver:{
        receiverName:'Abiodun Jude',
        deliveryDeclaration:'',
        zipcode:'',
        telephone:'',
      },
      senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

      wayBillCode:{
        image:'',
        values:'',
      },
      shipmentDetails:{
        services:{
          diplomaticDocument:'', /* Yes or No*/
          worldWideDiplomaticDocument:'', /* Yes or No*/
          domesticPackage:'', /* Yes or No*/
          worldMail:'',/* Yes or No*/
          otherService:'', /*Specify*/
        },
        sendingFee:{
           receiver:'',/* Yes or No*/
           cashOrCheckOrCreditCard:'',/* Yes or No*/
           externalBillingAgreement:'',/* Yes or No*/
        },
        shipmentInsurance:'', /* Yes or No*/
        descriptionOfCargo:'Personal Belonging'
      },
      securityChecks:{
          harmonizedCommunityCode:'', /* Yes or No*/
          typeOfExport:{
             temporary:'', /* Yes or No*/
             permanent:'', /* Yes or No*/
             repairReturn:'', /* Yes or No*/
          }
      },
      origin:'',
      destination:'',
      sizeAndWeight:{
        numberOfPieces:'',
        weight:'',
      },
      volumetricChargedWeight:{
        shipment:'',
        handlingCharges:'',
        totalCharges:'',
        currencyCode:'',
        senderPaid:'',
        totalBalance:'', 
      },
      routeNumber:'',
      date:'',        
   },
    
 ]
 export default tracker_data