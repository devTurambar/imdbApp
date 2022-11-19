import React, { useEffect, useState } from "react";
import Data from "../data/MOCK_DATA.json";

function Search() {
    const [value, setValue] = useState("");


    //event.target.value busca o valor do elemento no qual o evento esta a acontecer
    const onChange = (event) =>{
        setValue(event.target.value);
        console.log(event.target.value)
    }

  return (
    <div className="search">
        <div className="search-container">
            <div className="search-container-bar">
                <input className="search-container-bar-input" placeholder="Enter title" type="text" value={value} onChange={onChange}/>
                <button className="search-container-bar-button" onClick={() => {}}>Search</button>
            </div>
            
            <div className="search-container-dropdown">
                {
                    Data.filter((item) => {
                        const searchItem = value.toLowerCase();
                        const listItem = item.title.toLowerCase();

                        //startsWith checks if lisItem starts with the searchItem string
                        return searchItem && listItem.startsWith(searchItem) && searchItem !== listItem;
                    }).slice(0,10).map((item) =>(
                        <div className="search-container-dropdown-row" key={item.id}>{item.title}</div>
                    ))
                }
            </div>
        </div>        
    </div>

  );
}

export default Search;
