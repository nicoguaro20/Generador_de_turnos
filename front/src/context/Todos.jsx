import { createContext } from "react";

export const TodosContext = createContext({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {}
});

export const TodosProvider = ({children}) => {
    const { todos, setTodos } = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (title) => {
        setTodos(todos.filter((todo)=>todo.title !== title))
    };

    
    const value = {
        todos,
        addTodo,
        removeTodo
    }

    return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};

