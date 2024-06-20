import React from "react";
import { FaSearch} from "react-icons/fa";
import "./questionSearchBar.css";


/**
 * Renders a container with multiple block elements, each representing a question.
 *
 * @function SearchBar
 * @author Rahman Mian 
 * @param {Object[]} questionArray - Array of question objects.
 * @returns {JSX.Element} blockContainer - Container containing div blocks.
 */
export function QuestionSearchBar({setSearchResults, searchInput, setSearchInput, questions, setSearchBarAddedClicked}) {


    const handleClick = () => {
        setSearchBarAddedClicked(true);
      }
  
      const handleBlur = () => {
        setTimeout(() =>{
          setSearchBarAddedClicked(false);
        },300);
     }
    
    const handleChange = async (value) => {
       setSearchInput(value);
       if(value === ""){
        setSearchResults([]);
     }else{

        try {
            // Filter questions based on lowercase versions of value and question title
                const results = questions.filter((question) => {
                const lowercaseTitle = question.title.toLowerCase(); // Convert title to lowercase
                // Check for exact match or partial match
                return lowercaseTitle.includes(value.toLowerCase()) || value.toLowerCase().includes(lowercaseTitle);
            });
           console.log(results);
            setSearchResults(results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    };
    
    
    


   

    return (
        <>
           <div className="search-input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Search Your Questions.." id="searchInput" value={searchInput} onClick={handleClick}  onBlur={handleBlur} onChange={(e) => handleChange(e.target.value)} />
           </div>
        </>
    );
};
