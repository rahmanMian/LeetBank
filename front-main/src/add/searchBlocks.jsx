import React from 'react'
import "./searchBlocks.css"
import {SearchBlock} from "./searchBlock";

export const SearchBlocks = ({results, addQuestion}) => {
  return (
    <div className='results-list'>
       {results.map((result, id) => {
        return <SearchBlock result ={result} key={id} addQuestion={addQuestion} />
       })}
    </div>
  );
};
