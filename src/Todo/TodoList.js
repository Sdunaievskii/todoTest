import React, {useContext} from "react";
import classCss from './styleTodo.module.css'
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";




const TodoList = (props) => {

    return (
        <div className={classCss.container}>
            <AddTodo/>

            <TodoItems/>
        </div>
    )
}

export default TodoList;


