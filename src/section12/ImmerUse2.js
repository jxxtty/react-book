import {useRef, useCallback, useState} from "react";
import produce from "immer";

// [ useState 함수형 업데이트와 immer 함께 사용하기 ]
// immer에서 제공하는 produce함수에 첫번째 파라미터로 함수 하나를 넣게되면 업데이트함수를 반환한다.
// ex)
// const update = produce(draft => {
//     draft.value = 2;
// });
// const originalState = {
//     value: 1,
//     foo: 'bar'
// }
// const nextState = update(originalState);
// console.log(nextState); // {value: 2, foo: 'bar'}

const ImmerUse = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({name: '', username: ''});
    const [data, setData] = useState({
        array: [],
        uselessValue: null
    });

    // input 수정을 위한 함수
    const onChange = useCallback(
        event => {
            const {name, value} = event.target;
            setForm(produce(draft => { // 수정
                draft[name] = value;
            }));
        },
        [form]
    );

    // form 등록을 위한 함수
    const onSubmit = useCallback(
        event => {
            event.preventDefault();

            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username
            };

            // array에 새 항목 등록
            setData(produce(draft => { // 수정
                draft.array.push(info);
            }));

            // form 초기화
            setForm({
                name: '',
                username: ''
            });
            nextId.current += 1;
        },
        [data, form.name, form.username]
    );

    // 항목을 삭제하는 함수
    const onRemove = useCallback(
        id => {
            setData(produce(draft => { // 수정
                draft.array.splice(draft.array.findIndex(info => info.id === id));
            }));
        },
        [data]
    );

    return (
        <div>
            <p><b>------------------ immer을 사용한 경우 O ------------------</b></p>
            <form onSubmit={onSubmit}>
                <input name={"username"} placeholder={"아이디"} value={form.username} onChange={onChange}/>
                <input name={"name"} placeholder={"이름"} value={form.name} onChange={onChange}/>
                <button type={"submit"}>등록</button>
            </form>
            <div>
                <ul>
                    {data.array.map(info => (
                        <li key={info.id} onClick={() => onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ImmerUse