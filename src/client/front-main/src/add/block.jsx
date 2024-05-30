import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../App.css';
import { DeleteQuestion } from '../delete/deleteQuestion';

/**
 * Renders a block representing a question with a delete button.
 *
 * @function Block
 * @param {Object} question - The question object.
 * @param {Function} setQuestion - The state setter function for updating the questions state.
 * @param {Function} setIndex - The state setter function for updating the index state.
 * @returns {JSX.Element} The rendered block component.
 */
export function Block({question, setQuestion, setIndex, addComment}) {
    const [isChecked, setIsChecked] = useState(false);
    const [newText, setnewText] = useState("");

    /**
     * Handles the deletion of a question.
     */
    const handleDeleteQuestion = () => {
        DeleteQuestion({ id: question.id, setQuestion, setIndex });
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleEdit = (e) => {
        const newText = e.target.value;
        setnewText(newText);
        addComment(question.id, newText);
      };

    return (
        <>
            <div className="block" id={`block-${question.id}`}>
                <span>{question.title}</span>
                <button onClick={handleDeleteQuestion}>Delete</button>
            </div>
            <div className="tab">
                    <input 
                        type="checkbox"
                        name={`accordion-${question.id}`}
                        id={`cb-${question.id}`}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor={`cb-${question.id}`} className="tab__label">
                        Comments
                    </label>
                    </div>
                    {isChecked && (
                        <div className="tab__content">
                             <textarea
                             className="questionComment"
                             id={"textarea_" + question.id}
                             type="text"
                             value={question.comment}
                             onChange={handleEdit}
                              />
                        </div>
                    )}
        </>
    );
}
