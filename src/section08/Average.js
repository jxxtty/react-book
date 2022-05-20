// useMemo -> 함수 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다.
// useMemo를 사용하기 전에는 input에 값을 입력하는 내내 getAverage함수가 호출된다.
// 숫자를 리스트에 등록할때만 호출되게 하면 되는데, 이렇게 렌더링 할때마다 계산하는 것은 낭비다.
// useMemo는 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식이다.
import {useState, useMemo} from "react";

const getAverage = numbers => {
    console.log('평균값 계산중~');
    if(numbers.length === 0) return 0;

    const sum = numbers.reduce((a, b) => a+b);
    return sum / numbers.length;
}

const Average = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = event => {
        setNumber(event.target.value);
    }

    const onInsert = event => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(() => getAverage(list), [list]); // useMemo 추가

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/*<b>평균값 : </b> {getAverage(list)}*/} {/* useMemo 미사용 */}
                <b>평균값 : </b> {avg}  {/* useMemo 사용 */}
            </div>
        </div>
    );
}

export default Average