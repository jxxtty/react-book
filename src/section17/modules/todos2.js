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

// immer을 사용
// 객체의 구조가 복잡해지거나 객체로 이루어진 배열을 다룰 경우, immer를 사용하면 훨씬 편리하게 상태를 관리할 수 있다.
// immer 사용시 주의할 점 : counter 모듈처럼 간단한 리듀서에 사용하게되면 오히려 코드가 더 길어진다.
const todos2 = handleActions(
    {
        [CHANGE_INPUT2]: (state, {payload: input}) =>
            produce(state,draft => {
                draft.input = input
            }),
        [INSERT2]: (state, {payload: todo}) =>
            produce(state, draft => {
                draft.todos.push(todo);
            }),
        [TOGGLE2]: (state, {payload: id}) =>
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
            }),
        [REMOVE2]: (state, {payload: id}) =>
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
            })
    },
    initialState
);

// immer을 사용한다고해서 모든 업데이트 함수에 immer을 적용할 필요는 없다.
// todos.js 와 비교했을 때 TOGGLE을 제외한 업데이트 함수들은 immer를 쓰지 않는 코드가 오히려 더 짧기때문에, TOGGLE에만 immer을 적용해도된다.


export default todos2