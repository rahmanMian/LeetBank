import React from 'react'
import "./searchBlock.css";

export const SearchBlock = ({result, addQuestion, setInput}) => {
  


  const handleClick = () => {
    addQuestion(result.title, result.titleSlug);
    setInput('');  // Clear the input
    //window.location.reload();  //ensuures search bar is reset
  };

  return (
    <div className="search-result" onClick={handleClick}>{result.title}</div>
  )
}
