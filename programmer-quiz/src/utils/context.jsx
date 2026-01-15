
import { createContext, useContext, useState } from "react";
import { questionsHTML } from "./questionsHTML";
import { questionsCSS } from "./questionsCSS";
import { questionsJavaScript } from "./questionsJavaScript";
import { questionsDOM } from "./questionsDOM";
import { questionsWebTools } from "./questionsWebTools";
import { questionsReact } from "./questionsReact";
import { questionsAngular } from "./questionsAngular";
import { questionsSQL } from "./questionsSQL";
import { questionsNodeExpress } from "./questionsNodeExpress";
import { questionsPythonDjango } from "./questionsPythonDjango";
import { questionsAlgorithms } from "./questionsAlgorithms";
import { questionsSystems } from "./questionsSystems";

const allQuestions = [
    ...questionsHTML,
    ...questionsCSS,
    ...questionsJavaScript,
    ...questionsDOM,
    ...questionsWebTools,
    ...questionsReact,
    ...questionsAngular,
    ...questionsSQL,
    ...questionsNodeExpress,
    ...questionsPythonDjango,
    ...questionsAlgorithms,
    ...questionsSystems
];

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [wait, setWait] = useState(true);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [error, setError] = useState(false);
    const [quiz, setQuiz] = useState({ amount: 5, category: "HTML", difficulty: "easy", });
    const [modalOpen, setModalOpen] = useState(false);

    const nextQuestion = () => {
        setIndex((oldIndex) => {
            const index = oldIndex + 1;
            if (index > questions.length - 1) {
                openModal();
                return 0;
            } else {
                return index;
            }
        });
    };

    const checkResponse = (value) => {
        if (value) {
            setCorrect((oldState) => oldState + 1);
        }
        nextQuestion();
    };

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setWait(true);
        setCorrect(0);
        setModalOpen(false);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuiz({ ...quiz, [name]: value });
    };

    const handleShipment = (e) => {
        e.preventDefault();
        const { amount, category, difficulty } = quiz;
        const filtered = allQuestions.filter((p) => p.Category === category && p.Difficulty === difficulty);
        if (filtered.length >= amount) {
            const selected = filtered.sort(() => Math.random() - 0.5).slice(0, amount);
            setQuestions(selected);
            setError(false);
            setWait(false);
        } else {
            setError(true);
            setQuestions([]);
        }
    };

    return (
        <AppContext.Provider 
            value={{
                wait,
                loading,
                questions,
                index,
                correct,
                error,
                modalOpen,
                nextQuestion,
                checkResponse,
                closeModal,
                quiz,
                handleChange,
                handleShipment,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default AppProvider;
