import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleBook,handleMarkAsRead}) => {
    const [data,setData]=useState([])
    useEffect(()=>{
     fetch('./data.json').then(res=>res.json())
     .then(data=>setData(data))

    },[])

    return (
        <div className="lg:w-[65%] space-y-16">
          {
            data.map((Data,idx)=><Blog key={idx} Data={Data} handleBook={handleBook} handleMarkAsRead={handleMarkAsRead}/>)
          }
        </div>
    );
};

export default Blogs;