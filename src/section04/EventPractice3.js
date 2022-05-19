// function형 컴포넌트
import {useState} from "react";

const EventPractice3 = () => {
    // input이 username, message 이렇게 2개밖에 없다면 EventPractice2.js처럼 작성하는것도 괜찮다.
    // 그러나 input이 늘어난다면 event.target.name을 활용하는 것이 더 좋다.
    // EventPracitce2.js 코드를 event.target.name을 활용하는 코드로 변경하면 다음과 같다.

    // 이 방법은 후에 useReducer와 커스텀Hooks를 활용하면 더 편하게 할 수 있다.

    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;

    const onChange = event => {
        const nextForm = {
            ...form, // 기존의 form내용을 복사한 뒤에
            [event.target.name]: event.target.value // 원하는 값을 덮어 씌운다.
        };
        //console.log(nextForm);
        setForm(nextForm);
    }


    const onClick = () => {
        alert(username + " : " + message);
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h3>이벤트 연습 (function component)</h3>
            <input type={"text"} name={"username"} placeholder={"사용자명"} value={username} onChange={onChange}/>
            <input type={"text"} name={"message"} placeholder={"아무거나 입력해보세용"} value={message} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice3