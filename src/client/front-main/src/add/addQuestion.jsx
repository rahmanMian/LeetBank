import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../App.css"
import { CreateBlocks } from "./createBlocks";

export function AddQuestion(){

    const [questions, setQuestion] = useState(() => {
        const localValue = localStorage.getItem('QUESTIONS');
        if (localValue === null) return [];
        return JSON.parse(localValue);
      });

      
    useEffect(() => {
        localStorage.setItem("QUESTIONS", JSON.stringify(questions));
        }, [questions]);
    

    //usestate for entering new values
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e){
        e.preventDefault();
       if(newItem  === "") return;
       addQuestion(newItem);
       setNewItem("");
      }


    function addQuestion(title) {
        const newQuestion = {
            id: uuidv4(), // Generate unique ID for note
            title: title,  
        };
        setQuestion(questions => [...questions, newQuestion]);
    }

  return(
     <>
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <input  id = "addInput" placeholder="Add a note..." value={newItem} onChange={e=> setNewItem(e.target.value)}/>
       </div>
   </form>

   <CreateBlocks questionArray={questions} />

</>
  )
}