// useCallback -> useMemo와 비슷한 함수
// 주로 렌더링 성능을 최적화해야하는 상황에서 사용, 만들었던 함수를 재사용할 수 있다.
// 첫번째 파라미터로 생성하고싶은 함수를 넣고, 두번째 파라미터로 배열을 넣는다. 이 배열은 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지를 명시한다.
// 빈 배열을 넣게되면(onChange) : 컴포넌트가 렌더링될 때 만들었던 함수를 계속해서 재사용하며,
// 배열안에 체크할 값을 넣게되면(onInsert-number,list) : 해당 값들(number, list)가 변경되거나 새로운 항목이 추가될 때 새로 만들어진 함수를 사용한다.

import {useState, useCallback, useMemo, useRef} from "react";

const getAverage2 = numbers => {
    console.log('평균값 계산22222~~~');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
}

const Average2 = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const inputEl = useRef(null); // <- useRef 추가

    const onChange = useCallback(event => {
        setNumber(event.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus(); // <- useRef 추가
    }, [number, list]); // number 혹은 list가 변경되었을 때만 함수를 생성한다.
    // number와 list에 의존하고있기때문에 반드시 배열에 number, list를 넣어줘야한다.
    // (기존의 number와 list를 조회해서 nextList를 생성하기 때문에)

    const avg = useMemo(() => getAverage2(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/> {/* <- useRef 추가 */}
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b> {avg}
            </div>
        </div>
    );
}

export default Average2