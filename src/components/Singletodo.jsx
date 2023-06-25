import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

  


  const SingleTodo = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ?{ ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (todo.id===id?{ ...todo,todo: editTodo}:todo))
    );
    setEdit(false);
  };


  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  
 return (
    <form className= "todos__single" onSubmit={(e) => handleEdit(e,todo.id)}>
    {
    edit ? (
        <input 
        ref={inputRef}
        value={editTodo}
        onChange={(e) => setEditTodo(e.target.value)}
        className="todos__single--text"/>
    )
    
    :todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={()=>{
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )}
          
      
   
  


export default SingleTodo;