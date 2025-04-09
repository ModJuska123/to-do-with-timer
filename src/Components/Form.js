import React from 'react';

const Form = ({ setStatus, inputText, setInputText, todos, setTodos }) => {

    // Input Text Handler
    const inputTextHandler = (e) => {
        setInputText(e.target.value); 
    };
    
    // Submit Todo Handler
    const submitTodoHandler = (e) => {
        e.preventDefault(); //Prevent form from submitting
        setTodos([...todos,
                {
                    text: inputText, completed: false, id: Math.random() * 1000
                }
        ]);
        setInputText('');
    };

    // Status Handler
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }  

    return (
   
            <form>
                <input value={inputText} onChange={inputTextHandler} className='todo-input' />
                <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        
    )
};


export default Form;