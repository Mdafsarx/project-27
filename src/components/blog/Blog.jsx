import { CiBookmark } from "react-icons/ci";


const Blog = ({Data,handleBook,handleMarkAsRead}) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags}=Data
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl ">
       <figure><img src={cover} alt={title} className="w-full"/></figure>

       <div className="card-body">

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img src={author_img} alt="" className="w-[50px]" />
                <div>
                    <h4 className="font-bold text-lg">{author}</h4>
                    <h4>{posted_date}</h4>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <p className="font-medium text-lg">{reading_time} min read</p>
                
                <span className="text-2xl">
                <CiBookmark onClick={()=>handleBook(Data)}/>
                </span>
            </div>
        </div>
       <h2 className="card-title text-2xl font-bold">{title}</h2>
       <div className="space-x-2 *:font-medium">
       {
        hashtags.map((hash,i)=><span key={i}>#{hash}</span>)
       }
       </div>
      <button className="btn btn-active btn-link flex justify-start" onClick={()=>handleMarkAsRead(reading_time)} >Mark as read</button>
         
      </div>

      </div>

        </div>
    );
};

export default Blog;