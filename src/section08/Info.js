// useState 사용
import {useState, useEffect} from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hooks다.
    // 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 봐도 무방하다.

    // 1. 리액트 컴포넌트가 렌더링 될 때마다 작업수행
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다!');
    //     console.log({
    //         name, nickname
    //     });
    // });

    // 2. useEffect의 두번째 인자에 빈 배열[]을 넣어주면 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않는다.
    // useEffect(() => {
    //     console.log('렌더링 될 때만 실행된다.');
    // }, []);

    // 3. 특정 값이 업데이트 될 때만 작업 수행
    // 두번째 인자에 검사하고 싶은 값을 넣어주면 된다.
    // useEffect(() => {
    //     console.log(name);
    // }, [name]);

    // 4. 컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고싶다면 "뒷정리 함수"를 반환해줘야한다. (return부분)
    // 언마운트 될때만 뒷정리함수를 호출하고 싶다면 useEffect의 두번째 파라미터에 비어있는배열[]을 넣으면 된다.
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name]);

    const onChangeName = event => {
        setName(event.target.value);
    }

    const onChangeNickname = event => {
        setNickname(event.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
}

export default Info