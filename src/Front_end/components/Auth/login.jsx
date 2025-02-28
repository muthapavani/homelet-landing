import React, { useState } from "react"
import axios from "axios"
const Login =() =>{
    const [form,Setform] = useState({
        Email:"",
        Password:""
    })
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try{
        const {data}= await axios.post("",form)
        localStorage.setItem("token",data.token)
        alert("Sign Up Successfull")
        }
        catch(error){
            alert(error.response.data.error)
        }
        }
    return(<>
      <form onSubmit={handleSubmit}>
        <input type="Email" placeholder="enter Email" onChange={(e)=>Setform({...form,Email:e.target.value})}></input>
        <input type="Password" placeholder="enter Password" onChange={(e)=>Setform({...form,Password:e.target.value})} ></input>
        <button type="Submit">Login</button>
        <button>continue with Google</button>
      </form>
    </>)

}
export default Login