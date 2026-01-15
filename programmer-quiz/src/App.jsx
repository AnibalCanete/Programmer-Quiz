
import { useGlobalContext } from "./utils/context";
import ConfigurationForm from "./components/ConfigurationForm";
import Loading from "./components/Loading";
import Modal from "./components/Modal";

function App() {
  const { wait, loading, questions, index, correct, nextQuestion, checkResponse } = useGlobalContext();

  if (wait) {
    return <ConfigurationForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { Question, IncorrectAnswers, CorrectAnswer } = questions[index];
  let answers = [ ...IncorrectAnswers];
  const indexTemporal = Math.floor(Math.random() * 4);

  if (indexTemporal === 3) {
    answers.push(CorrectAnswer);
  } else {
    answers.push(answers[indexTemporal]);
    answers[indexTemporal] = CorrectAnswer;
  }

  const escapeHTML = (str) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="corrects-answers">Correct Answers : {correct}/{index}</p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: escapeHTML(Question) }}></h2>
          <div className="button-container">
            {answers.map((answer, index) => {
              return (<button key={index} className="answer-button" onClick={() => checkResponse(CorrectAnswer === answer)} dangerouslySetInnerHTML={{ __html: escapeHTML(answer) }}></button>)
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>Next Question</button>
      </section>
    </main>
  );
};

export default App;
