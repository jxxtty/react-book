import {useRef, useCallback, useState} from "react";
import produce from "immer";

// immer을 사용하여 컴포넌트의 상태를 작성할 때는 객체 안에 있는 값을 수정하거나, 배열에 직접적인 변화를 일으키는 push, splice등의 함수를 사용해도 무방하다.
// immer을 사용한다해서 반드시 코드가 간결해지는 것은 아니다. 따라서 불별ㄴ성을 유지하는 코드가 복잡할때만 사용하면 충분하다.

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
            setForm(produce(form, draft => { // setForm안에서 produce함수 사용
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
            setData(produce(data, draft => { // setData안에 produce함수 사용
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
            setData(produce(data, draft => { // setData안에 produce함수 사용
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