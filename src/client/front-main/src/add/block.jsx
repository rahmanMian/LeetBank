import React from 'react';
import '../App.css';
import { DeleteQuestion } from '../delete/deleteQuestion';

/**
 * Renders a block representing a question with a delete button.
 *
 * @function Block
 * @author Rahman Mian
 * @param {Object} question - The question object.
 * @param {Function} setQuestion - The state setter function for updating the questions state.
 * @returns {JSX.Element} The rendered block component.
 */
export function Block({ question, setQuestion, setIndex }) {
    /**
     * Handles the deletion of a question.
     * 
     */
    const handleDeleteQuestion = () => {
        DeleteQuestion({ id: question.id, setQuestion, setIndex});
    };

    return (
        <div className="block" id={question.id}>
            <span>{question.title}</span>
            <button onClick={handleDeleteQuestion} >Delete</button>
        </div>
    );
}
