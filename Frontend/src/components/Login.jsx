import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
    //react-hook-form to get data
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit =async (data) => {
    const userInfo={
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Logged in Successfully");
        document.getElementById("my_modal_3").close();
        setTimeout(()=>{
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        },1000);
      }
    }).catch((err)=>{
      if(err.response){
      console.log(err);

      toast.error("Error: "+err.response.data.message)}
      setTimeout(()=>{},2000)
    })
  }
  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=> document.getElementById("my_modal_3").close()}>✕</Link>
  
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span><br />
        <input type="email" placeholder='enter your email'
        className='w-80 px-3 py-1 border rounded mt-4' {...register("email", { required: true })}></input> <br />
        {errors.email && <span className="text-sm text-red-500">This field is required</span>}<br />
      
    </div>
    <div className='mt-4 space-y-2'>
    <span>Password</span><br />
        <input type="password" placeholder='enter your Password'
        className='w-80 px-3 py-1 border rounded mt-4' {...register("password", { required: true })}></input> <br />
        {errors.password && <span className="text-sm text-red-500">This field is required</span>}
 </div>
 <div className='flex justify-around mt-4'> 
    <button className='bg-pink-500 px-3 py-1 rounded text-white hover:bg-pink-700 duration-200' onClick={console.log(1+1)}>Login</button>
    <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>SignUp</Link></p>
 </div>
</form>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Login