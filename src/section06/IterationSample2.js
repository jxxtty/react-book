import {useState} from "react";

const IterationSample2 = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

    const onChange = event => setInputText(event.target.value);
    const onClick = () => {
        const newName = {id: nextId, text:inputText};
        const newNames = [...names];
        newNames.push(newName);
        setNames(newNames);
        // 위에 네줄을 아래의 두줄로 표현가능하다.
        // push의 경우 기존 배열 자체를 변경하기때문에 newNames라는 names를 복사한 배열을 만들었고, concat의 경우 새로운 배열을 만들어주기때문에 바로 names에 사용했다.
        // const nextNames = names.concat({id: nextId, text: inputText});
        // setNames(nextNames);

        setNextId(nextId + 1);
        setInputText('');
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSample2