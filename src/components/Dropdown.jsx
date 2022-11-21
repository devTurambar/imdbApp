import React, { useEffect, useState } from "react";

const Dropdown = ({id,title}) => {
    const [focused, setFocused] = useState();
    
    const handleMovieClick = () => {
        
    }
    const iterateList = (key) => {
        console.log(key);
    }
    const onFocus = (e) =>{

    }
    return (
        <div className="search-container-dropdown-row" tabIndex="1" 
            onClick={() => handleMovieClick()} 
            onKeyUp={(key) => iterateList(key)}
            onFocus={(e) => onFocus(e)}
        >
            {title}  
        </div>
    )
}
export default Dropdown;