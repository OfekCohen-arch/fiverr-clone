import { gigService } from "@/services/fiverr.service.local.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function GigDetails(){
const {gigId} = useParams()
const [gig,setGig] = useState(null)
useEffect(()=>{
if(gigId) loadGig()
},[gigId])

async function loadGig(){
try {
const gig = await gigService.getById(gigId) 
setGig(gig)  
} catch (error) {
 console.log('There is no gig with id:',gigId,error);   
}
}

if(!gig) return 
return(
<section>
<h1>{gig.title|| 'I will edit facebook video ads that actually sell'}</h1>
</section>
)
}