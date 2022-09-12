import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getBooks, updateBook } from "../Redux/app/action";

function EditBook(){
    const {id}=useParams();
    const [currentBook,setCurrentBook]=useState({})
    // console.log(id);
   const books=useSelector((state)=>state.AppReducer.books)
  const dispatch= useDispatch();
  const [bookName,setBookName]=useState("");
  const [bookAuthor,setBookAuthor]=useState("");

  const navigate=useNavigate();


  const updateBookData=()=>{
    const payload={
        book_name:bookName,
        author:bookAuthor
    }
    dispatch(updateBook(id,payload))
    .then(()=>{
        dispatch(getBooks());
    }).then(()=>{
  Navigate("/");
    });
  };

   useEffect(()=>{
    if(books.length===0)
    {
        dispatch(getBooks());
    }
   },[books.length,dispatch])
   
   
   
   useEffect(()=>{
        if(id)
        {
            const bookById=books.find(book=>book.id===Number(id));
            // if bookbyid is present then setcurrentbook by bookbyid
            // bookById&&setCurrentBook(bookById)
            bookById&&setBookName(bookById.book_name)
            bookById&&setBookAuthor(bookById.author)

        }
    },[books,id])

    return(
        <div>
         <h2>Edit Page</h2>
         <div>
         <input type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)}/>
           
         </div>

         <div>
         <input type="text" value={bookAuthor} onChange={(e)=>setBookAuthor(e.target.value)}/>
         </div>
         <button onClick={updateBookData}>Update</button>
        </div>
    )
}
export default EditBook