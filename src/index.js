import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"; // section 13
import rootReducer from "./section17/modules"; // section 17
import {createStore} from "redux"; // section 17
import {Provider} from "react-redux"; // section 17
import {composeWithDevTools} from "redux-devtools-extension"; // section 17

const store = createStore(rootReducer, composeWithDevTools()); // section 17

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /**
     * section 13 _ react-router
     */
    // 프로젝트에 react-router를 적용할 때는 react-router-dom에 내장되어있는 "BrowserRouter"라는 컴포넌트를 사용하여 감싸면 된다.
    // 이 컴포넌트는 웹 애플리케이션에 HTML5의 History API를 사용하여 페이지를 새로 불러오지 않고도 주소를 변경하고 현재 주소의 경로에 관련된 정보를 리액트 컴포넌트에서 사용할 수 있도록 해준다.
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>

    /**
     * section 17 _ 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기
     */
    // 리액트 컴포넌트에서 스토어를 사용할 수 있도록 App컴포넌트를 react-redux에서 제공하는 Provider 컴포넌트로 감싸준다.
    // store을 props로 전달해준다
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
