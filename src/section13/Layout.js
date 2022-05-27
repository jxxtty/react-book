import {Outlet, useNavigate} from "react-router-dom";
// 중첩된 라우트와 Outlet은 페이지끼리 공통적으로 보여줘야 하는 레이아웃이 있을 때도 유용하게 사용할 수 있다.


const Layout = () => {
    const navigate = useNavigate(); // useNavigate는 Link컴포넌트를 사용하지 않고 다른페이지로 이동해야하는 상황에서 사용하는 Hook이다.

    const goBack = () => {
        // 이전 페이지로 이동
        navigate(-1);
    }

    const goArticles = () => {
        // articles 경로로 이동
        // navigate("/articles");
        navigate("/articles", {replace: true}); // replace: true를 사용하게되면, 현재 페이지를 페이지 기록에 남기지 않는다.
                                            // Home페이지 => 소개페이지 => "게시글 목록"버튼 클릭해서 게시글목록페이지 => "뒤로가기"클릭시 소개페이지가나오는게아니라 Home페이지가나옴
    }

    return (
        <div>
            <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
                Header
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout