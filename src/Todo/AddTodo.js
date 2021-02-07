import React, {createRef, useContext, useRef, useState} from "react";
import TextField from "@material-ui/core/TextField";
import classesCSS from './styleTodo.module.css'
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {TodoDataContext} from "../TodoDataContext";


const useStyles = makeStyles((theme) => ({
    btn: {
        '& > *': {
            padding: '5px',
        }
    }
}));


const AddTodo = () => {
    const inputEl = createRef();
    const classes = useStyles();
    const {todo, setTodo, btnFilter, setTodoFilter,todoFilter} = useContext(TodoDataContext);
    let addTodoTask = () => {
    if(inputEl.current.value.trim()===''){
        return
    }
        setTodo(todo.concat([{
            id: new Date().toString(),
            tittle: inputEl.current.value,
            completed: false,
            one: false,
        }]))
        inputEl.current.value = ''
    };


    return (
        <div>
            <form noValidate autoComplete="off">
                <input className={classesCSS.inp} type="text" ref={inputEl} placeholder='создать задание'/>
                <Button onClick={addTodoTask} className={classes.btn} variant="contained" color="primary">
                    Add Todo
                </Button>
            </form>
        
        </div>
    )
}
export default AddTodo;
