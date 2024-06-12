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
           
            {/*if questions then add shuffle button*/}
            <div id="shuffleContainer">
            <ShuffleBlock questionArray={questionArray} index={index} />

            {questionArray.length > 0 && <button id="shuffleButton" onClick={handleShuffle}>Get A Question</button>}
            </div>
        </>
    );
}

export default ShuffleOutput;
