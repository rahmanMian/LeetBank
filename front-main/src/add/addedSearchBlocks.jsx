import React from 'react'
import "./searchBlocks.css"
import { AddedSearchBlock } from './addedSearchBlock';


export const AddedSearchBlocks = ({setSearchResults, searchResults, setSearchInput, questions}) => {
 
  return (
    <div className='search-results-list'>
       {searchResults.map((result, id) => {
        return <AddedSearchBlock result ={result} key={id} setSearchResults = {setSearchResults} setSearchInput={setSearchInput} questions={questions} />
       })}
    </div>
  );
};
