
const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map((name, index) => <li id={index}>{name}</li>); // 고유한 값이 없을때만 index값을 key로 사용할 것!! (index를 key로 사용하면 배열이 변경될 때 효율적으로 렌더링하지 못한다)
    return <ul>{nameList}</ul>
}

export default IterationSample