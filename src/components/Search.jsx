import React, { useEffect, useState } from "react";
import Dropdown from './Dropdown'
import Data from "../data/MOCK_DATA2.json";

const Search = ({searchTermExchange, result},key) => {
    const [value, setValue] = useState("");

    useEffect(
         //wait 500ms to make the request to the api
         //cleartimeout clears the previous settimeout to make way to this current one
        () => {
            const delay = setTimeout(() => {
                //request to API
                searchTermExchange(value);
            },500);
            return () => clearTimeout(delay);
        },[value]
    )


    //event.target.value busca o valor do elemento no qual o evento esta a acontecer
    // const onChange = (event) =>{
    //     setValue(event.target.value);
    //     searchTermExchange(event.target.value);
    // }

    const showList = () => {
        // if(result){
            //return (result.filter((item) => {
            return (Data.filter((item) => {
                const searchItem = value.toLowerCase();
                const listItem = item.title.toLowerCase();
                return searchItem && listItem.startsWith(searchItem) && searchItem !== listItem;
            }).slice(0,10).map((item) =>{
                return (
                    // <Dropdown key={item.id} title={item.title}/>
                    <div className="search-container-dropdown-row" tabIndex="1" 
                        onClick={() => handleMovieClick()} 
                        onKeyUp={(key) => iterateList(key)}
                        onFocus={(e) => onFocus(e)}
                        key={result.id}
                    >
                        {item.title}  
                    </div>
                )
            }))
        // }
    }

    const handleMovieClick = () => {
        
    }
    const iterateList = (key) => {
        if(key="ArrowUp"){
            console.log("keyUp")
        }
    }
    //dropdown needs tabindex=1 to be able to be focused
    const onFocus = (e) =>{
        console.log("OnFocus")
        console.log(e)
    }

  return (
        <>
            <div className="search-container-bar">
                <input className="search-container-bar-input" placeholder="Enter title" type="text" value={value} 
                    onChange={(event) => setValue(event.target.value)} 
                    onKeyUp={(key) => iterateList(key)} 
                    onFocus={(e) => onFocus(e)}
                />
                <button className="search-container-bar-button" onClick={() => {}}>Search</button>
            </div>
            <div className="search-container-dropdown">
                {   
                    showList()
                }
            </div>
        </>
  );
}

export default Search;
