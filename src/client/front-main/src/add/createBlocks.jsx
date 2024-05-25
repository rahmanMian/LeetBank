import React from 'react';
import '../App.css';
import { Block } from './block';


/**
 * Renders a container with multiple block elements, each representing a question.
 *
 * @function CreateBlocks
 * @param {Object[]} questionArray - Array of question objects.
 * @returns {JSX.Element} blockContainer - Container containing div blocks.
 */
export function CreateBlocks({ questionArray = [], setQuestion, setIndex}) {

    return (
        <div className="blockContainer">
            {questionArray.length > 0 && questionArray.map((question) => (
                <Block key ={question.id}  question={question} setQuestion = {setQuestion} setIndex={setIndex}/>
            ))}
           
        </div>
    );
}
