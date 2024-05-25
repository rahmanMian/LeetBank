

/**
 * Renders a block with the title of a question from the questionArray based on the given index.
 *
 * @function ShuffleBlock
 * @author Rahman Mian
 * @param {Object[]} questionArray - Array of question objects.
 * @param {number} index - The index of the question to be displayed.
 * @returns {JSX.Element|null} The rendered block or null if index is invalid.
 */

export function ShuffleBlock({questionArray, index}) {
    if (index === null || index < 0 || index >= questionArray.length) {
        return null;
    }

    return (
        <div className="block" id={questionArray[index].id}>
            <span>{questionArray[index].title}</span>
        </div>
    );
}

export default ShuffleBlock;
