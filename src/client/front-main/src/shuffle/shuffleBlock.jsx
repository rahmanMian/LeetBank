
//add document 
export function ShuffleBlock({questionArray, index}){

        if (index === null || index < 0 || index >= questionArray.length) {
            return;
        }
    

    return (


      
        <div className="block" id={questionArray[index].id}>
        
        <span>{questionArray[index].title}</span>
        </div>
        
    );
}