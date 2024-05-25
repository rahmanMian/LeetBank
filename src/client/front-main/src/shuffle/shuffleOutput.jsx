import React, { useState, useEffect } from 'react';
import { ShuffleBlock } from './shuffleBlock'; // Make sure the path is correct
import "../App.css";

/**
 * ShuffleOutput Component
 * 
 * This component manages the state of the `index` to display a shuffled question from the `questionArray`.
 * It includes a button to shuffle and update the displayed question.
 *
 * @function ShuffleOutput
 * @param {Object} params - The parameters object.
 * @param {Object[]} params.questionArray - Array of question objects.
 * 
 * @returns {JSX.Element} The rendered output with the ShuffleBlock and shuffle button.
 */
export function ShuffleOutput({ questionArray , setIndex, index}) {
   

    const handleShuffle = () => {
        const newIndex = Math.floor(Math.random() * questionArray.length);
        setIndex(newIndex);
        console.log(newIndex);
    };

    return (
        <>
            <ShuffleBlock questionArray={questionArray} index={index} />
            {/*if questions then add shuffle button*/}
            {questionArray.length > 0 && <button onClick={handleShuffle}>Shuffle</button>}
        </>
    );
}

export default ShuffleOutput;
