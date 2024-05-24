import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../App.css";
import { CreateBlocks } from "./createBlocks";
import { ShuffleOutput } from "../shuffle/shuffleOutput";


/**
 * Component to add and manage questions.
 *
 * @function AddQuestion
 * @returns {JSX.Element} The rendered AddQuestion component.
 * @description Manages the state of questions and handles adding new questions. Persists questions to localStorage.
 * @author Rahman Mian
 */
export function AddQuestion() {

    const [questions, setQuestion] = useState(() => {
        const localValue = localStorage.getItem('QUESTIONS');
        if (localValue === null) return [];
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("QUESTIONS", JSON.stringify(questions));
    }, [questions]);

    const [newItem, setNewItem] = useState("");

    /**
     * Handles form submission to add a new question.
     *
     * @function handleSubmit
     * @param {Event} e - The form submission event.
     */
    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;
        addQuestion(newItem);
        setNewItem("");
    }

    /**
     * Adds a new question to the state.
     *
     * @function addQuestion
     * @param {string} title - The title of the new question.
     */
    function addQuestion(title) {
        const newQuestion = {
            id: uuidv4(), // Generate unique ID for question
            title: title,
            

        };
        setQuestion(questions => [...questions, newQuestion]);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <input id="addInput" placeholder="Add a note..." value={newItem} onChange={e => setNewItem(e.target.value)} />
                </div>
            </form>

            <CreateBlocks questionArray={questions} setQuestion={setQuestion} />

            <ShuffleOutput questionArray={questions} />
        </>
    );
}
