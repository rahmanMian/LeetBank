import React, {useState} from "react";
import { FaSearch} from "react-icons/fa";
import "./searchBar.css";
import Axios from "axios";

/**
 * Renders a container with multiple block elements, each representing a question.
 *
 * @function SearchBar
 * @author Rahman Mian 
 * @param {Object[]} questionArray - Array of question objects.
 * @returns {JSX.Element} blockContainer - Container containing div blocks.
 */
export function SearchBar() {
    const [input, setInput] = useState("");

   


    const handleChange = async (value) => {
        setInput(value);
    
        // Check if the input length is at least 3 characters
        if (value.length >= 3) {
            try {
                const response = await Axios.post("http://localhost:5000/graphql", { searchKeywords: value });
                console.log('Fetched data:', response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            console.log('Input is less than 3 characters, skipping fetch');
        }
    };

    return (
        <div className="searchContainer">
           <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} />
           </div>
        </div>
    );
};
