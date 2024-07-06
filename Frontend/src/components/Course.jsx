import React, { useEffect, useState } from 'react'
import axios from "axios";
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Course() {
    const [book,setBook]=useState([]);
    useEffect(()=>{
        const getBook = async () =>{
            try {
                const res=await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    },[]);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

                <div className='items-center justify-center text-center mt-28 '>
                    <h1 className='text-2xl md:4xl'>We are delighted to have you <span className="text-pink-500">here!! :)</span></h1>
                    <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, animi natus provident sed ex unde sunt quisquam nihil debitis neque alias, cumque quos accusamus et nulla impedit reprehenderit temporibus? Harum iusto vitae omnis ut sequi facilis saepe officia explicabo, reprehenderit vel earum repellendus, nam rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, animi natus provident sed</p>

                    <Link to="/"> 
                        <button className='bg-pink-500 text-white rounded mt-10 px-3 py-2 hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course