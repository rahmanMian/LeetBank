import React from 'react'
import "./searchBlock.css";

export const AddedSearchBlock = ({setSearchResults, result, setSearchInput, questions}) => {
  


  const handleClick = () => {
    
    const questionChosen = questions.find((question) => question.title === result.title);
    const blockElement = document.getElementById(`block-${questionChosen.id}`);
    blockElement.scrollIntoView({behavior: "smooth"});


    setSearchInput('');  // Clear the input
    setSearchResults([]);
  };

  return (
    <div className="search-result" onClick={handleClick}>{result.title}</div>
  )
}
