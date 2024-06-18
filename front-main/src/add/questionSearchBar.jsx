import React from "react";
import { FaSearch} from "react-icons/fa";
import "./questionSearchBar.css";
import Axios from "axios";

/**
 * Renders a container with multiple block elements, each representing a question.
 *
 * @function SearchBar
 * @author Rahman Mian 
 * @param {Object[]} questionArray - Array of question objects.
 * @returns {JSX.Element} blockContainer - Container containing div blocks.
 */
export function QuestionSearchBar({searchInput, setSearchInput}) {

    
    const handleChange = async (value) => {
       setSearchInput(value);
    };
    
    
    


   

    return (
        <>
           <div className="search-input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Search for Questions.." id="searchInput" value={searchInput} onChange={(e) => handleChange(e.target.value)} />
           </div>
        </>
    );
};
