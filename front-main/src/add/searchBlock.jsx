import React from 'react'
import "./searchBlock.css";

export const SearchBlock = ({result, addQuestion}) => {
  const handleClick = () => {
    // Toggle color between blue and red
    addQuestion(result.title);
  };
  return (
    <div className="search-result" onClick={handleClick}>{result.title}</div>
  )
}
