import {createAction, handleActions} from "redux-actions";
import produce from "immer";

const CHANGE_INPUT2 = 'todos2/CHANGE_INPUT2';
const INSERT2 = 'todos2/INSERT2';
const TOGGLE2 = 'todos2/TOGGLE2';
const REMOVE2 = 'todos2/REMOVE2';

// createAction으로 액션을 만들면, 액션에 필요한 추가 데이터는 payload라는 이름을 사용한다.
// 액션생성함수에서 받아온 파라미터를 그대로 payload에 넣는것이 아니라 변형을 주어서 넣고싶다면, createAction의 두번째 함수에 payload를 정의하는 함수를 따로 선언해서 넣어주면 된다.
export const changeInput2 = createAction(CHANGE_INPUT2, input => input);

let id = 3;
export const insert2 = createAction(INSERT2, text => ({
    id: id++,
    text,
    done: false
}));

export const toggle2 = createAction(TOGGLE2, id => id);
export const remove2 = createAction(REMOVE2, id => id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

const todos2 = handleActions(
    {
        [CHANGE_INPUT2]: (state, {payload: input}) =>
            produce(state,draft => {
                draft.input = input
            }),
        [INSERT2]: (state, action) => ({
            ...state,
            todos: state.todos.concat(action.payload)
        }),
        [TOGGLE2]: (state, action) => ({
            ...state,
            todos: state.todos.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)
        }),
        [REMOVE2]: (state, action) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        })
    },
    initialState
);

export default todos2