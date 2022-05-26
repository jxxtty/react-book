import {useParams} from "react-router-dom";

const data = {
    jxxtty: {
        name: '안재희',
        description: '리액트를 공부하는 백엔드 개발자'
    },
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    }
};

const Profile = () => {
    const params = useParams(); // URL 파라미터는 useParams라는 Hook을 사용하여 객체 형태로 조회할 수 있다.
    const profile = data[params.username]; // "/profiles/jxxtty" 이런식으로 jxxtty부분을 username으로 받아올 것이다 -> App.js에 Route를 넣으면서 설정함

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
}

export default Profile