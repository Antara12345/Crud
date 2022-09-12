import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

const FilterComp=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const initialSortBy=searchParams.getAll("sortBy");
    const initialCategoryFilters=searchParams.getAll("category");
    const [category,setCategory]=useState(initialCategoryFilters||[]);
   const [sortBy,setSortBy]=useState(initialSortBy[0]||"");
   
    const handleFilter=(e)=>{
       //check if the value is present,then remove it,else add it.
        // console.log(e.target.value);

       const newCategories=[...category];
    //    console.log(newCategories,category);
       if(newCategories.includes(e.target.value)){
        //remove it
        newCategories.splice(newCategories.indexOf(e.target.value),1);
       }
       else{
          newCategories.push(e.target.value)
       }

       setCategory(newCategories);
    };





    const handleSort=(e)=>{
      setSortBy(e.target.value);
    };


    //if the category changes,then update the search params in the URL
    
    useEffect(()=>{
   if(category||sortBy){

    // console.log(category);

    let params={};
    category&&(params.category=category);
    sortBy && (params.sortBy= sortBy);
    setSearchParams(params);

    // console.log(params);
   }
    },[category,setSearchParams,sortBy]);

    return(
        <div>
          <h3>Filter Comp</h3>
          <div>
            <div>
                <input type="checkbox" value="Novel" checked={category.includes("Novel")} onChange={handleFilter} />
                <label>Novel</label>
            </div>
            <div>
                <input type="checkbox" value="Motivational" checked={category.includes("Motivational")} onChange={handleFilter} />
                <label>Motivational</label>
            </div>
            <div>
                <input type="checkbox" value="Science_Fiction" checked={category.includes("Science_Fiction")} onChange={handleFilter} />
                <label>Science Fiction</label>
            </div>
            <div>
                <input type="checkbox" value="Thriller" checked={category.includes("Thriller")} onChange={handleFilter} />
                <label>Thriller</label>
            </div>
          </div>
          <h3>Sort Comp</h3>
          <div onChange={handleSort} style={{display:"flex" ,flexDirection:"column"}} >
            <input type="radio" value="asc" name="sortBy" defaultChecked={sortBy==="asc"}/>
            <label>Ascending</label>
            <br/>
            <input type="radio" value="desc" name="sortBy" defaultChecked={sortBy==="desc"}/>
            <label>Descending</label>
          </div>
        </div>
    )
}
export default FilterComp