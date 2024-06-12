import React, { useState, useEffect, useRef } from 'react';
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
export function Block({ question, setQuestion, setIndex, addComment }) {
    const [isChecked, setIsChecked] = useState(false);
    const [newText, setNewText] = useState(question.comment || "");
    const textareaRef = useRef(null); // Creating a ref
    const headerRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset the height
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'; // Set the height to fit content
        }
    }, [newText, isChecked]);

    /**
     * Handles the deletion of a question.
     */
    const handleDeleteQuestion = () => {
        DeleteQuestion({ id: question.id, setQuestion, setIndex });
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

        if (headerRef.current) {
            headerRef.current.style.borderRadius = isChecked ? '0 0 10px 10px' : '0';
        }
    };

    const handleEdit = (e) => {
        const newText = e.target.value;
        setNewText(newText);
        addComment(question.id, newText);

        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset the height
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'; // Set the height to fit content
        }
    };

    return (
        <div className='block-tab'>
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
                <label htmlFor={`cb-${question.id}`} ref={headerRef} className="tab__label">
                    Comments
                    <span className={isChecked ? "arrow up" : "arrow"}></span>
                </label>
                {isChecked && (
                    <div className="tab__content">
                        <div className="comments-box">
                            <textarea
                                className="questionComment"
                                id={"textarea_" + question.id}
                                ref={textareaRef} // Assigning the ref to the textarea
                                type="text"
                                value={newText}
                                onChange={handleEdit}
                                placeholder="Enter your comments here..."
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
