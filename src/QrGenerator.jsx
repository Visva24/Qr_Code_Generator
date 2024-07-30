import { useState } from "react"
export const QrGenerator = () => {
  const [img,setImage]=useState("");
  const[loading,setLoading]=useState(false);
  const[qrdata,setQrdata]=useState("")
  const[size,setSize]=useState("")
  async function generate(){
     setLoading(true);
     try{
        const url=`http://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${decodeURIComponent(qrdata)}`;
        setImage(url)
     }catch(err){
      console.log(err);
     }finally{
      setLoading(false);
     }
  }
  function download(){
    fetch(img).then((res)=>res.blob()).then((blob)=>{
       const link=document.createElement("a");
       link.href=URL.createObjectURL(blob);
       link.download="QR Generated";
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
    })
  }
  return (
   <div className="head">
   <div className="container">
    <h1>QR GENERATOR</h1>
    {loading&&<p>Please wait...</p>}
    {img&&<img src={img} alt="" />}
    <div>
    <label htmlFor="datainput" className="data">
     Data for QR:
    </label>
    <input type="text" id="datainput" placeholder="Enter the url for Qr" onChange={(e)=>setQrdata(e.target.value)} />
    <label htmlFor="sizeinput" className="data">
     Image Size:
    </label>
    <input type="text" id="sizeinput" placeholder="Enter the image size" onChange={(e)=>setSize(e.target.value)} />
    <button className="generate" onClick={generate}>Generate QR</button>
    <button className="download" onClick={download}>Download QR</button>
    </div>
    <p>@Designed by <i style={{color:"blue"}}>VisvaDeveloper</i>.</p>
   </div>
   </div>
   
  )
}
