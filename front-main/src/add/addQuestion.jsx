import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../App.css";
import { CreateBlocks } from "./createBlocks";
import { ShuffleOutput } from "../shuffle/shuffleOutput";
import { SearchBar } from "./searchBar";
import { SearchBlocks} from "./searchBlocks";


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
    

    //array for list of preffered vals
    const [results , setResults] = useState([]);

    //to use for question input
    const [input, setInput] = useState("");

   

    useEffect(() => {
        localStorage.setItem("QUESTIONS", JSON.stringify(questions));
    }, [questions]);


   //for storage mangemt of the user input for shuffle 
    const [newItem, setNewItem] = useState("");


    const [index, setIndex] = useState(() => {
        const index = sessionStorage.getItem('shuffledIndex');
        return index !== null ? parseInt(index) : Number.MAX_SAFE_INTEGER;
    });

    useEffect(() => {
            sessionStorage.setItem('shuffledIndex', index);
    }, [index]);

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
            comment: ""
        };
        setQuestion(questions => [newQuestion, ...questions]);
    }

    

    function addComment(id, comment) {
        setQuestion(questions => 
            questions.map(question => 
                question.id === id ? { ...question, comment: comment } : question
            )
        );
    }


    return (
        <>
           {/*allows you to add new blocks*/}
            {/* <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <input id="addInput" placeholder="Add a question" value={newItem} onChange={e => setNewItem(e.target.value)} />
                </div>
            </form> */}

             <div className="searchContainer">
             <SearchBar setResults={setResults} setInput = {setInput}/>
             <SearchBlocks results = {results} addQuestion={addQuestion} setInput={setInput}/>
             </div>

            {/*Renders the shuffle block usiing an index generated*/}
            <ShuffleOutput questionArray={questions} setIndex={setIndex} index ={index}/>
            
            {/*Renders the blocks using and the comments*/}
            <CreateBlocks questionArray={questions} setQuestion={setQuestion} setIndex={setIndex} addComment={addComment}/>

            
        </>
    );
}
