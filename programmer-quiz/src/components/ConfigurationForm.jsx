
import { useGlobalContext } from "../utils/context";

const ConfigurationForm = () => {
    const { quiz, handleChange, handleShipment, error } = useGlobalContext();
    return (
        <main>
            <section className="quiz small-quiz">
                <form className="configuration-form">
                    <h2>Quiz</h2>
                    { /* Amount */ }
                    <div className="form-control">
                        <label htmlFor="amount">Number of Questions</label>
                        <input type="number" name="amount" id="amount" value={quiz.amount} onChange={handleChange} className="form-input" min={1} max={10} />
                    </div>
                    { /* Category */ }
                    <div className="form-control">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className="form-input" value={quiz.category} onChange={handleChange}>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="DOM">DOM</option>
                            <option value="Web Tools">Web Tools</option>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="SQL">SQL</option>
                            <option value="Node.js & Express">Node.js & Express</option>
                            <option value="Python & Django">Python & Django</option>
                            <option value="Algorithms">Algorithms</option>
                            <option value="Systems">Systems</option>
                        </select>
                    </div>
                    { /* Difficulty */ }
                    <div className="form-control">
                        <label htmlFor="difficulty">Select Difficulty</label>
                        <select name="difficulty" id="difficulty" className="form-input" value={quiz.difficulty} onChange={handleChange}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    {error && (
                        <p className="error">Questions Cannot Be Generated. Please Try Different Options.</p>
                    )}
                    <button type="submit" onClick={handleShipment} className="submit-button">Start</button>
                </form>
            </section>
        </main>
    );
};

export default ConfigurationForm;
