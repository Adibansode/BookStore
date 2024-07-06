import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <>
    <Navbar></Navbar>
   
     <div className='w-90 mt-40  flex justify-center items-center '>
        <div className='space-y-4 p-14 md:border-[2px]  '>

        <h1 className=' text-xl font-bold'>
            Contact Us
        </h1><br />
        Name
        <label className="input input-bordered w-80 flex items-center gap-2">

  <input type="text" className="grow" placeholder=" enter your Name" />
</label><br />
Email
<label className="input input-bordered w-80 flex items-center gap-2">
  
  <input type="text" className="grow" placeholder="enter your Email" />
  </label><br />
  Message <br />
  <textarea className="textarea textarea-info " placeholder="Message"></textarea><br />

  <button className='bg-blue-500 px-3 py-2 rounded cursor-pointer hover:bg-blue-400'>Submit</button>
    </div>
        </div>
    </>
  )
}

export default Contact