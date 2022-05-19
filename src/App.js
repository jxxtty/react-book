import logo from './logo.svg';
import './App.css';
import Three from "./section03/Three";
import Four from "./section04/Four";
import Five from "./section05/Five";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <>
                <h2>[3장] 컴포넌트</h2>
                <Three />

                <hr/>
                <h2>[4장] 이벤트 핸들링</h2>
                <Four />

                <hr/>
                <h2>[5장] ref: DOM에 이름 달기</h2>
                <Five />
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
