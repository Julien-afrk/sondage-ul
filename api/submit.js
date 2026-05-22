export default async function handler(req,res){

 if(req.method!=="POST"){
   return res.status(405).json({
      error:"Method not allowed"
   });
 }

 try{

   const response=await fetch(
   "https://script.google.com/macros/s/AKfycbw1aNgPt4ZfmgqTk2XdhR2Rfrot1PGyaWdTrvKJbUDs3Mbobx7pceEITILaW94MFAd_/exec",
   {
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(req.body)
   });

   const data=await response.text();

   res.status(200).json({
      success:true,
      data
   });

 }
 catch(e){

   res.status(500).json({
      error:e.toString()
   });

 }

}
