import {changeInput, insert, toggle, remove} from "../modules/todos";
import {connect} from "react-redux";
import Todos from "../components/Todos";

const TodoContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove
}) => {
    return (
        <Todos input={input} todos={todos}
                  onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />
    );
}

export default connect(
    ({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }),
    {
        changeInput, insert,toggle,remove
    }
)(TodoContainer)