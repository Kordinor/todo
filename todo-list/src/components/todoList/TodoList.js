import { useState, useEffect } from "react";
import {v4 as generateId } from "uuid";

import { AddItemModal } from "../addItemModal/AddItemModal";
import { TodoItem } from "../todoItem/TodoItem";

import "./TodoList.css";

export const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        const savedTodoList = JSON.parse(localStorage.getItem("todo-list"));
        if(savedTodoList){
            setTodoList(savedTodoList);
        }
        setTouched(true);
    }, []);

    useEffect(() => {
        if(touched){
            localStorage.setItem("todo-list", JSON.stringify(todoList));
        }
    }, [todoList]);

    const addTodoItem = ({name, description}) => {
        const index = generateId();
        const todoItem = {
            name,
            description,
            index
        };
        console.log(todoItem);
        setTodoList((todoList) => [...todoList, todoItem]);
    }

    const deleteTodoItem = (index) => {
        setTodoList(todoList => todoList.filter(todoItem => todoItem.index != index));
    }

    const renderedTodoList = todoList.map((todoItem) => <TodoItem todoItem={todoItem} deleteTodoItem={deleteTodoItem}/>);

    return (
        <div className="todo-list-container">
            <AddItemModal submitFunction={addTodoItem}/>
            <div className="todo-items-container">
                {renderedTodoList}
            </div>
        </div>
    );
}