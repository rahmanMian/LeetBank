import React, { useState } from 'react';
import { ShuffleBlock } from './shuffleBlock'; // Make sure the path is correct
import "../App.css";

/**
 * ShuffleOutput Component
 * 
 * This component manages the state of the `index` to display a shuffled question from the `questionArray`.
 * It includes a button to shuffle and update the displayed question.
 *
 * @function ShuffleOutput
 * @author Rahman Mian
 * @param {Object} params - The parameters object.
 * @param {Object[]} params.questionArray - Array of question objects.
 * 
 * @returns {JSX.Element} The rendered output with the ShuffleBlock and shuffle button.
 */
export function ShuffleOutput({ questionArray }) {
    const [index, setIndex] = useState(null);

    const handleShuffle = () => {
        setIndex(Math.floor(Math.random() * questionArray.length));
    };

    return (
        <>
            <ShuffleBlock questionArray={questionArray} index={index} />
            <button onClick={handleShuffle}>Shuffle</button>
        </>
    );
}

export default ShuffleOutput;


