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
export function Block({ question, setQuestion, setIndex }) {
    const [isChecked, setIsChecked] = useState(false);

    /**
     * Handles the deletion of a question.
     */
    const handleDeleteQuestion = () => {
        DeleteQuestion({ id: question.id, setQuestion, setIndex });
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
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
                    {isChecked && (
                        <div className="tab__content">
                            <textarea class="questionComment"></textarea>
                        </div>
                    )}
                </div>
        </>
    );
}
