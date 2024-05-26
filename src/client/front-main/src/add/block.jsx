import React from 'react';
import '../App.css';
import { DeleteQuestion } from '../delete/deleteQuestion';
import Accordion from 'react-bootstrap/Accordion';

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
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
        </div>
    );
}
