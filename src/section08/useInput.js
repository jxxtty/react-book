// 커스텀 Hooks
import {useReducer} from "@types/react";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = event => {
        dispatch(event.target);
    }

    return [state, onChange];
}