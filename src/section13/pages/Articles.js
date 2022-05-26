import {Link, Outlet} from "react-router-dom"; // 중첩된 라우트 형태를 위해 Outlet import

// Outlet 컴포넌트는 Route의 children으로 들어가는 JSX 엘리먼트를 보여주는 역할을 한다.
// App.js에서 <Route Articles>안에 <Route Article>을 넣어줬고,
// 따라서 Articles의 children은 Article이 된다.
const Articles = () => {
    return (
        <div>
            <Outlet/> {/* 이부분에 children이 보여지게된다. */}
            <ul>
                <li>
                    <Link to={"/articles/1"}>게시글 1</Link>
                </li>
                <li>
                    <Link to={"/articles/2"}>게시글 2</Link>
                </li>
                <li>
                    <Link to={"/articles/3"}>게시글 3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Articles