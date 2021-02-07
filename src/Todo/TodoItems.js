import React, {useContext, useRef, useState} from "react";
import {TodoDataContext} from "../TodoDataContext";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import {makeStyles} from '@material-ui/core/styles';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from '@material-ui/icons/Delete';
import classesCss from './styleTodo.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        margin: 'auto',
        marginTop: '15px',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',

    }
}));

const TodoItems = () => {
    const {todo, checked, handleToggle, deleteTodo, todoFilter,filter} = useContext(TodoDataContext);
    const classes = useStyles();




    return (
        <List className={classes.root}>
            {
                todo.length === 0 ? <div>Сдесь будут ваши задачи</div> :
                todo.map((value, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                        <ListItem className={classes.icon} key={index} role={undefined} dense button
                                  onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </ListItemIcon>
                            <div className={classesCss.number}>{index + 1}.</div>
                            <ListItemText className={checked.indexOf(value) !== -1 ? classesCss.completed : ''}
                                          id={labelId}
                                          primary={`${value.tittle} `}/>
                            <ListItemSecondaryAction>
                                <FormControlLabel
                                    control={<Checkbox icon={<WhatshotIcon/>} checkedIcon={<WhatshotIcon/>}
                                                       name="checkedH"/>}/>
                                <IconButton onClick={() => deleteTodo(value.id)} aria-label="delete">
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
        </List>
    )
}

export default TodoItems;