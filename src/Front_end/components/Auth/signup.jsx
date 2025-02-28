import React, { useState }  from "react"
import axios from "axios"
const Signup =() =>{
    const [form , Setform]=useState({
        Username:"",
        Email:"",
        Password:""
    })
     const handleSubmit =async(e)=>{
        e.preventDefault()
        await axios.post("",form)
        alert("Sign Up Successfull")

     }
       return(<>
       <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter Username" onChange={(e)=>Setform({...form,Username:e.target.value})}></input>
        <input type="email" placeholder="Enter Email" onChange={(e) => Setform({ ...form, Email: e.target.value })} />
        <input type="password" placeholder="Enter Password" onChange={(e) => Setform({ ...form, Password: e.target.value })} />

        <button type="Submit">Sign Up</button>
        <button > contiue with Google</button>
       </form>
       </>)

}
export default Signup