import logo from './logo.svg';
import './App.css';
import {Component, useCallback, useState} from "react";
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
import Articles2 from "./section13/pages/Articles2";
import NotFound from "./section13/pages/NotFound";
import Login from "./section13/pages/Login";
import MyPage from "./section13/pages/MyPage";
import CallBackExample from "./section14/CallBackExample";
import PromiseExample from "./section14/PromiseExample";
import axios from "axios";
import NewsList from "./section14/components/NewsList";
import Categories from "./section14/components/Categories";


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
//                 {/*<hr/>*/}
//                 {/*<h2>[7장] 컴포넌트의 라이프사이클 메서드</h2>*/}
//                 {/*<Seven />*/}
//                 {/*<br/>*/}
//
//                 <hr/>
//                 <h2>[8장] Hooks</h2>
//                 <Eight/>
//
//                 <hr/>
//                 <h2>[12장] immer를 사용하여 더 쉽게 불변성 유지하기</h2>
//                 <Twelve/>
//
//                 <PromiseExample />
//             </>
//         );
//     }
// }

/**
 * section 13 _ react-router
 */
// const App = () => {
//         return (
//             <Routes>
//                 {/* <Route path={"주소규칙"} element={보여줄 컴포넌트 JSX} /> */}
//                 <Route element={<Layout />}>
//                         {/*<Route path={"/"} element={<Home />} />*/}
//                         <Route index element={<Home />} /> {/* Route컴포넌트에는 index 라는 props가 있는데, 이는 path="/"와 동일한 의미를 가진다 */}
//
//
//                         {/*<Route path={"/about"} element={<About />} />*/}
//                         <Route path={"/about"} element={<About2 />} />
//
//                         <Route path={"/profiles/:username"} element={<Profile />} /> {/* 경로에 :을 사용해서 URL 파라미터를 설정한다 */}
//                 </Route>
//
//                 <Route path={"/articles"} element={<Articles2 />}>
//                         <Route path={":id"} element={<Article />} />
//                 </Route>
//                 {/*<Route path={"/articles/:id"} element={<Article />}></Route>*/}
//
//                 {/* 경로에 직접 "/mypage"를 입력해서 확인해볼것! -> 로그인페이지로 이동된다. */}
//                 <Route path={"/login"} element={<Login />} />
//                 <Route path={"/mypage"} element={<MyPage />} />
//
//
//                 <Route path={"*"} element={<NotFound />} /> {/* "*"는 wildcard, 일치하는 라우트가 없다면 NotFound페이지가 보여지게된다. */}
//             </Routes>
//
//         )
// }

/**
 * section 14 - 외부 API를 연동하여 뉴스 뷰어 만들기
 */
// newsapi key : ca597ab40f9e4734a056e894d556f892
const App = () => {
        // const [data, setData] = useState(null);
        // const onClick = () => {
        //         axios.get('https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=ca597ab40f9e4734a056e894d556f892').then(response => {
        //                 setData(response.data);
        //         });
        // }

        const [category, setCategory] = useState('all');
        const onSelect = useCallback(category => setCategory(category), []);

        return (
            // <div>
            //         <div>
            //                 <button onClick={onClick}>불러오기</button>
            //         </div>
            //         {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> }
            // </div>
            <>
                <Categories category={category} onSelect={onSelect}/>
                <NewsList category={category} />
            </>
        );
}

export default App;
