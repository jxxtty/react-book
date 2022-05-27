import {Navigate} from 'react-router-dom'; // Navigate import

// Navigate : 컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동하고싶을때 사용하는 컴포넌트 -> 리다이렉트가 필요할때 사용한다.
// 예를들어, 로그인된상태가 아닐때 마이페이지에 접근한다면 마이페이지가아닌 로그인페이지를 보여주고싶을때 다음과같이 사용한다.

const MyPage = () => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Navigate to={"/login"} replace={true} />;
    }

    return <div>마이페이지~</div>;
}

export default MyPage