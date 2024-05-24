import React, { useState } from 'react';
import  {ShuffleBlock} from './shuffleBlock'; // Make sure the path is correct
import "../App.css";

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


