import BookList from "../Components/BookList";
import FilterComp from "../Components/FilterComp";
import styled  from "styled-components"
function Books(){
    return(
        <div>
          <h3>Books Page</h3>
          <BookPageWrapper>
            <FilterCompWrapper>
            <FilterComp/>
            </FilterCompWrapper>
          <BookListWrapper>
          <BookList/>
          </BookListWrapper>
          </BookPageWrapper>
      
        </div>
    );
};

const BookPageWrapper=styled.div`
display:flex;
`;

const FilterCompWrapper=styled.div`
width:300px;
border:1px solid blue;`;

const BookListWrapper=styled.div`
width:100%;
border:1px solid red;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
grid-gap:10px;
justify-content:center;
`;

export default Books;