import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지 입니다~</p>

            {/* 웹페이지에서는 a태그를 사용하지만, 리액트라우터를 사용하는 프로젝트에서는 a태그를 바로 사용하면 안된다. */}
            {/* a태그를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러오기 때문이다. */}
            {/* Link 컴포넌트는 a태그를 사용하긴하지만, 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어있다. */}
            <ul>
                <li>
                    <Link to={"/about"}>소개</Link>
                </li>
                <li>
                    <Link to={"/profiles/jxxtty"}>jxxtty의 프로필</Link>
                </li>
                <li>
                    <Link to={"/profiles/velopert"}>velopert의 프로필</Link>
                </li>
                <li>
                    <Link to={"/profiles/abcd"}>존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to={"/articles"}>게시글 목록</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home