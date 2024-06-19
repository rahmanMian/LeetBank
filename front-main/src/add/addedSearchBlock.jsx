import React from 'react'
import "./searchBlock.css";

export const AddedSearchBlock = ({result, setSearchInput}) => {
  


  const handleClick = () => {
    setSearchInput('');  // Clear the input
  };

  return (
    <div className="search-result" onClick={handleClick}>{result.title}</div>
  )
}
