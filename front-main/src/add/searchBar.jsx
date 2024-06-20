import React from "react";
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
export function SearchBar({setResults, input, setInput, setSearchBarClicked}) {

    
    const handleClick = () => {
    
      setSearchBarClicked(true);
    }

    const handleBlur = () => {
       // Example: Reset searchBarClicked after 1 second
    setTimeout(() => {
        setSearchBarClicked(false);
      }, 100); // Adjust delay as needed
      }

    const handleChange = async (value) => {
        setInput(value);
        
         //check for complete removal
         if(value === ""){
            setResults([]);
         }

            try {
                const response = await Axios.post("http://localhost:5001/graphql", { searchKeywords: value });
                const questionArray = response.data.data.problemsetQuestionList.questions;
                const lowercaseValue = value.toLowerCase(); // Convert to lowercase directly
        
                // Filter questions based on lowercase versions of value and question title
                const results = questionArray.filter((question) => {
                    const lowercaseTitle = question.title.toLowerCase(); // Convert title to lowercase

                    // Check for exact match or partial match
                    return lowercaseTitle.includes(lowercaseValue) || lowercaseValue.includes(lowercaseTitle);
                });
        
                setResults(results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
    };
    
    
    


   

    return (
        <>
           <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Add a Question.." id="questionInput" value={input} onClick={handleClick} onBlur = {handleBlur} onChange={(e) => handleChange(e.target.value)} />
           </div>
        </>
    );
};
