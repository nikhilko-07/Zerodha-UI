import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
   const  routeTo = useNavigate()
  return (<>
    <div className='container text-center'style={{height:"50vh"}}>
    <h1 style={{marginTop:"20%"}}> NotFound</h1>
    <button onClick={()=>{routeTo("/")}} style={{borderRadius:"0.3rem",margin:"0 auto",color:"white",backgroundColor:"#387ED1",border:"none",width:"10%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1vw"}}>Home</button>
    </div>
    </>)
}

export default NotFound