import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const[input, setInput] = useState(props.edit ? props.edit.value : ' ');
    const inputRef =useRef(null)
    useEffect (() => {
        inputRef.current.focus()
    });
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100),
            text: input
        });

        setInput('');
    };
    return (
       <form className="todo__form" onSubmit={handleSubmit}>
           {props.edit ? (
               <>
               <input 
               type="text" 
               placeholder="Update your Item" 
               value={input} 
               name='text' 
               className='todo__input edit'
               onChange={handleChange}
               ref={inputRef}
               />
               <button className='todo__button edit'>Update</button>
               </>
               ) : 
               (
                   <>
               <input 
                type="text" 
                placeholder="Add a ToDo" 
                value={input} 
                name='text' 
                className='todo__input'
                onChange={handleChange}
                ref={inputRef}
            />
           <button className='todo__button'>Add ToDo</button>
           </>
           )
           }
           
       </form>
    )
}

export default TodoForm
