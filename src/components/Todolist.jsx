import React from 'react';
import "./style.css";
import Singletodo from '../components/Singletodo';


const TodoList = ({ todos , setTodos})  => {
  return(
     <div className='todos'>
        {todos.map((todo) => (
            <Singletodo

            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            />
        ))}
     </div>
  );
    
  
};

export default TodoList;
  