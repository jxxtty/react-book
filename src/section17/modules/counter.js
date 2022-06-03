// 원래는 액션타입, 액션생성함수, 리듀서코드를 각각 다른 파일로 작성한다.
// 이게 리덕스 공식 문서에서도 사용되기때문에 기본적이라고 할 수 있지만, 새로운 액션을 만들때마다 세종류의 파일을 모두 수정해야하기때문에 번거로운 단점이 있다.
// ex)
// actions 디렉토리 안에 counter.js, todos.js
// constants 디렉토리 안에 ActionType.js
// reducers 디렉토리 안에 counter.js, todos.js

// 위의 방식에 불편함을 느껴 액션타입, 액션생성함수, 리듀서함수를 기능별로 파일 하나에 몰아서 작성하는 방식도 있다. 이를 'Ducks 패턴'이라고 부른다.
// 아래코드가 바로 Ducks 패턴으로 작성한 코드다.



// 1. 액션 타입을 정의
// 액션 타입은 대문자로 정의하고, 문자열의 내용은 '모듈이름/액션이름'과 같은 형태로 작성한다.
// 문자열 안에 모듈이름을 넣음으로써 프로젝트규모가 커졌을 때 액션의 이름이 충돌되지 않게 해준다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. 액션 생성 함수 생성
// export 해줘서 이 함수를 다른 파일에서 불러와 사용할 수 있다.
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 3. 초기상태 및 리듀서함수 생성
const initialState = {
    number: 0
};

function counter(state = initialState, action) { // 현재상태(initialState)를 참조해 새로운 객체를 생성해서 반환한다
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            }
        default:
            return state;
    }
}

export default counter


// export와 export default는 내보내는 갯수와 불러오는 방식의 차이가 있다.
// export는 여러개를 내보낼 수 있고, export default는 단 한개만 내보낼 수 있다.
// 불러올때는 다음과 같다.
// import counter from './counter';
// import {increase, decrease} from './counter';
// import counter, {increase, decrease} from './counter';