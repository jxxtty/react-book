import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {changeInput, insert, remove, toggle} from "../modules/todos";
import Todos from "../components/Todos";

const TodoContainer2 = () => {
    const {input, todos} = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }));
    const dispatch = useDispatch();

    const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
    const onInsert = useCallback(id => dispatch(insert(id)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
}

export default TodoContainer2