import { Link } from "react-router-dom";

const BookCard=({bookData})=>{
    return(
        <div>
           <div>
            <img width={"100px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5vuy7mFA-zU2VnM2NfdDBwecTHgaVw0WUQ&usqp=CAU" alt=""/>
            <div>{bookData.book_name}</div>
            <div>{bookData.category}</div>
            <div style={{display:"flex"}}>
            <div style={{flex:1}}>
                {bookData.release_year}
                </div>
            <Link to={`/books/${bookData.id}/edit`}><button>Edit</button></Link>
            <Link to={`/books/${bookData.id}`}><button>Single Page</button></Link>
            
            </div>
            
            </div> 
        </div>
    )
}
export default BookCard;