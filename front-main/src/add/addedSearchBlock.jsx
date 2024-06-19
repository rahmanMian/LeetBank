import React from 'react'
import "./searchBlock.css";

export const AddedSearchBlock = ({setSearchResults, result, setSearchInput}) => {
  


  const handleClick = () => {
    
    setSearchInput('');  // Clear the input
    setSearchResults([]);

  };

  return (
    <div className="search-result" onClick={handleClick}>{result.title}</div>
  )
}
