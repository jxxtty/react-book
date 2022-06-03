import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";

// rootReducer를 만들어주는 이유 -> createStore 함수를 사용하여 스토어를 만들때는 리듀서를 하나만 사용해야한다.
// 우리는 현재 counter, todos 두개의 리듀서가 있기때문에 이거를 하나로 합쳐주기위해서 rootReducer를 만든다.
// 이 작업은 리덕스에서 제공하는 combineReducers 유틸함수를 사용하면 쉽게 처리할 수 있다.

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer

// modules 디렉토리안에 index.js 파일을 만들어서 사용하면(파일명을 index.js로) 나중에 불러올때 디렉터리 이름까지만 입력하면 불러올 수 있다.
// ex) import rootReducer from './modules';