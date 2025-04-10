import { React, useState, useEffect } from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import './App.css';
import Timer from './Components/Timer';
import Settings from './Components/Settings';
import SettingsContext from './Components/SettingsContext';

const App = () => {
    
    //To-do
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    
    //Timer
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(25);
    const[breakMinutes, setBrackeMinutes] = useState(5);

    //UseEffect
    useEffect(() => {
        getLocalTodos();
    }, []);

    //useEfect
    useEffect(() => {
        filterHandler();
        if (todos.length > 0) {
            saveLocalTodos();
        }
    }, [todos, status]);


    //Filter Handler
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;

            case 'uncompleted':
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;

            default:
                setFilteredTodos(todos);
                break;
        }
    };

    //Save to local
    const saveLocalTodos = () => {
        console.log("Saving todos to localStorage:", todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            console.log("No todos in localStorage, initializing with an empty array.");
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            console.log("Parsed todos:", todoLocal);
            setTodos(todoLocal);
        }
    };

    


    return (
        <main>
            <SettingsContext.Provider value={{
                showSettings,
                setShowSettings,
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBrackeMinutes,
            }}>
                {showSettings ? <Settings /> : <Timer />}
            </SettingsContext.Provider>
            
            <div className="App">
                <h1 className="title">
                    Todo list
                </h1>
                <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
                <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
            </div>

        </main>

    );
};

export default App;