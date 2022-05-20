import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Three from "./section03/Three";
import Four from "./section04/Four";
import Five from "./section05/Five";
import Six from "./section06/Six";
import Seven from "./section07/Seven";

class App extends Component {
    render() {
        return (
            <>
                <h2>[3장] 컴포넌트</h2>
                <Three />
                <br/>

                <hr/>
                <h2>[4장] 이벤트 핸들링</h2>
                <Four />
                <br/>

                <hr/>
                <h2>[5장] ref: DOM에 이름 달기</h2>
                <Five />
                <br/>

                <hr/>
                <h2>[6장] 컴포넌트 반복</h2>
                <Six />
                <br/>

                <hr/>
                <h2>[7장] 컴포넌트의 라이프사이클 메서드</h2>
                <Seven />
            </>
        );
    }
}

// function App() {
//     return (
//         <>
//             <h2>[3장] 컴포넌트</h2>
//             <Three />
//
//             <hr/>
//             <h2>[4장] 이벤트 핸들링</h2>
//             <Four />
//
//             <hr/>
//             <h2>[5장] ref: DOM에 이름 달기</h2>
//             <Five />
//         </>
//     )
// }

export default App;
