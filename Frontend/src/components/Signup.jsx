import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
  const location  =useLocation();
  const navigate =useNavigate();
  const from=location.state?.form?.pathname||"/";
   //react-hook-form to get data
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successfully");
        navigate(from,{replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
      console.log(err);
      toast.error("Error: "+err.response.data.message)}

    })
   }
 
  return (
    
    <>
     <div className='flex mt-28 item-center justify-center '>
    <div id="" className="w-[650px] ">
  <div className="modal-box border-2px]">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</Link>
   
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span><br />
        <input type="text" placeholder='enter your Name'
        className='w-80 px-3 py-1 border rounded mt-4'  {...register("fullname", { required: true })}></input><br />
        {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
      
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span><br />
        <input type="email" placeholder='enter your email'
        className='w-80 px-3 py-1 border rounded mt-4 '  {...register("email", { required: true })} ></input><br />
      {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
    <span>Password</span><br />
        <input type="password" placeholder='enter your Password'
        className='w-80 px-3 py-1 border rounded mt-4 '  {...register("password", { required: true })}></input> <br />
        {errors.password && <span className="text-sm text-red-500">This field is required</span>}
 </div>
 <div className='flex justify-around mt-4'> 
    <button className='bg-pink-500 px-3 py-1 rounded text-white hover:bg-pink-700 duration-200'>Signup</button>
    <p>Have account? <button className='underline text-blue-500 cursor-pointer'
    onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>
    <Login></Login>
    </p>
 </div>
 </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup