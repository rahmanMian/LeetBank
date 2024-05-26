import "../App.css";

/**
 * Deletes a question from the state based on its ID.
 *
 * @function DeleteQuestion
 * @author Rahman Mian
 * @param {Object} params - The parameters object.
 * @param {string} id - The ID of the question to be deleted.
 * @param {Function} setQuestion - The state setter function residing in addQuestion for updating the questions state.
 */
export function DeleteQuestion({ id, setQuestion, setIndex}) {
    setQuestion(questions => questions.filter(question => question.id !== id));
    setIndex(Number.MAX_SAFE_INTEGER);
}
