import "../App.css"

export function Block(question){
    return(
        <>
        <div className="block" id = {question.id} />
        <span>{question.title}</span>
        <div/>

        </>
    );
}