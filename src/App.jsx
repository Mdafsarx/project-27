import { useState } from "react"
import Blogs from "./components/blogs/Blogs"
import BookMarks from "./components/bookmarks/BookMarks"
import Header from "./components/header/Header"

function App() {
  const [bookMark,setBookMark]=useState([])
  function handleBook(data){
    const remaining=bookMark.find((B)=>B.id==data.id)
    if(!remaining){setBookMark([...bookMark,data])}
    else{
      return
    }
  }
  const [readingTime,setReadingTime]=useState(0)
  const handleMarkAsRead=(time)=>{
    setReadingTime(readingTime+time)
    const BookMarkFilter=bookMark.filter((B)=>B.reading_time!==time)
    if(BookMarkFilter){setBookMark(BookMarkFilter)}
  }
  return (
    <>
         
         <Header/>
    
    <main className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-24">
      <Blogs handleBook={handleBook} handleMarkAsRead={handleMarkAsRead}/>
      <BookMarks bookMark={bookMark} readingTime={readingTime}/>
    </main>



    </>
  )
}

export default App
