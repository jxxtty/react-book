// redux-actions를 사용하면 액션 생성 함수를 더 짧은 코드로 작성할 수 있다.
// 그리고 리듀서를 작성할 때도 switch-case 문이 아닌 handleActions라는 함수를 사용하여 각 액션마다 업데이트 함수를 설정하는 형식으로 작성할 수 있다.
import {createAction, handleActions} from "redux-actions";

const INCREASE2 = 'counter2/INCREASE';
const DECREASE2 = 'counter2/DECREASE';

export const increase2 = createAction(INCREASE2);
export const decrease2 = createAction(DECREASE2);

const initialState = {
    number: 0
};

// handleActions
// 첫번째 파라미터에는 각 액션에 대한 업데이트 함수를 넣어준다
// 두번째 파라미터에는 초기상태를 넣어준다
const counter2 = handleActions(
    {
        [INCREASE2]: (state, action) => ({number: state.number + 1}),
        [DECREASE2]: (state,action) => ({number: state.number - 1})
    },
    initialState
);

export default counter2