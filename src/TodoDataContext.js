import React, {useContext, useState} from "react";

export const TodoDataContext = React.createContext(null);


export function TodoDataContextProvider({children}) {

    const [todo, setTodo] = useState([]);


    const [filter, setFilter] = useState('ALL');


    const [todoFilter, setTodoFilter] = useState(todo);


    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);

        setTodo(
            todo.map(todo => {
                if (todo.id === value.id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    };

    const deleteTodo = (id) => {
        setTodo((todo) => todo.filter((e) => e.id !== id));
    }

    const btnFilter = (value) => {

        if (value === 'ALL') {
            setFilter(filter => 'ALL')

            setTodoFilter(todoFilter => todo)
        }
        if (value === 'COMP') {
            setFilter(filter => 'COMP')

        }
        if (filter === 'IMP') {
            setFilter(filter => 'IMP')
        }
    }


    return (
        <TodoDataContext.Provider value={{todo, checked, handleToggle, deleteTodo, setTodo, btnFilter,todoFilter,setTodoFilter}}>
            {children}
        </TodoDataContext.Provider>
    )


}