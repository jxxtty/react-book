import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Three from "./section03/Three";
import Four from "./section04/Four";
import Five from "./section05/Five";
import Six from "./section06/Six";
import Seven from "./section07/Seven";
import Eight from "./section08/Eight";
import Twelve from "./section12/Twelve";
import {Route, Routes} from "react-router-dom";
import Home from "./section13/pages/Home";
import About from "./section13/pages/About";
import Profile from "./section13/pages/Profile";
import About2 from "./section13/pages/About2";
import Articles from "./section13/pages/Articles";
import Article from "./section13/pages/Article";
import Layout from "./section13/Layout";

// class App extends Component {
//     render() {
//         return (
//             <>
//                 <h2>[3장] 컴포넌트</h2>
//                 <Three />
//                 <br/>
//
//                 <hr/>
//                 <h2>[4장] 이벤트 핸들링</h2>
//                 <Four />
//                 <br/>
//
//                 <hr/>
//                 <h2>[5장] ref: DOM에 이름 달기</h2>
//                 <Five />
//                 <br/>
//
//                 <hr/>
//                 <h2>[6장] 컴포넌트 반복</h2>
//                 <Six />
//                 <br/>
//
//                 <hr/>
//                 <h2>[7장] 컴포넌트의 라이프사이클 메서드</h2>
//                 <Seven />
//                 <br/>
//
//                 <hr/>
//                 <h2>[8장] Hooks</h2>
//                 <Eight/>
//
//                 <hr/>
//                 <h2>[12장] immer를 사용하여 더 쉽게 불변성 유지하기</h2>
//                 <Twelve/>
//
//             </>
//         );
//     }
// }

const App = () => {
        return (
            <Routes>
                {/* <Route path={"주소규칙"} element={보여줄 컴포넌트 JSX} /> */}
                <Route element={<Layout />}>
                        <Route path={"/"} element={<Home />} />
                        {/*<Route path={"/about"} element={<About />} />*/}
                        <Route path={"/about"} element={<About2 />} />
                        <Route path={"/profiles/:username"} element={<Profile />} /> {/* 경로에 :을 사용해서 URL 파라미터를 설정한다 */}
                </Route>

                <Route path={"/articles"} element={<Articles />}>
                        <Route path={":id"} element={<Article />} />
                </Route>
                {/*<Route path={"/articles/:id"} element={<Article />}></Route>*/}
            </Routes>
        )
}

export default App;
