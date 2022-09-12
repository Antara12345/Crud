import { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import SingleBook from "../Pages/SingleBook";
import { getBooks } from "../Redux/app/action";
import BookCard from "./BookCard";
import styled from "styled-components"
import { useLocation, useSearchParams } from "react-router-dom";


const BookList = () => {
    const [searchParams]=useSearchParams();
    const books = useSelector((state) => state.AppReducer.books);
    const dispatch = useDispatch();
    const location=useLocation();  

    // console.log(location);  
    useEffect(() => {
        if (location || books.length === 0) {
            const sortBy=searchParams.get("sortBy");
            let getBooksParams={
                params:{
                    category:searchParams.getAll("category"),
                    _sort:sortBy&&"release_year",
                    _order:sortBy,
                },
            };
            dispatch(getBooks(getBooksParams));
        }
    },[location.search]);
    // console.log(books);
    return (
        <>
            {books.length > 0 && books.map((SingleBook) => {
                return <BookCardWrap key={SingleBook.id}>
                    <BookCard  bookData={SingleBook} />
                    </BookCardWrap>;
            })}
        </>
    );
};

const BookCardWrap=styled.div`
border:1px solid maroon;
width:300px;`;
export default BookList;