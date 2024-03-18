import Book from "../book/Book";

  
  const BookMarks = ({bookMark,readingTime}) => {
    return (
        <div className="lg:w-[35%]">
            <div className="bg-slate-200 p-4 border-2 border-blue-500 rounded-xl text-center"><h4 className="text-xl text-blue-500 font-bold">Spent time on read : {readingTime} min</h4></div>


           <div className="bg-slate-200 p-7 rounded-xl my-10">
            <h5 className="text-xl font-bold">Bookmarked Blogs : {bookMark.length}</h5>
            
            {
               bookMark.map((B,i)=><Book singleBookMark={B} key={i} ></Book>)
            }

             


           </div>

        </div>
    );
  };
  
  export default BookMarks;