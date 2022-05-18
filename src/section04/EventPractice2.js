// function형 컴포넌트
import {useState} from "react";

const EventPractice2 = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const onChangeUsername = event => setUsername(event.target.value);
    const onChangeMessage = event => setMessage(event.target.value);
    const onClick = () => {
        alert(username + " : " + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = event => {
        if (event.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습 (function component)</h1>
            <input type={"text"} name={"username"} placeholder={"사용자명"} value={username} onChange={onChangeUsername}/>
            <input type={"text"} name={"message"} placeholder={"아무거나 입력해보세용"} value={message} onChange={onChangeMessage} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice2