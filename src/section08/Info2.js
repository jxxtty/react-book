// useReducer 사용
// useState 사용
import {useState, useReducer} from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info2 = () => {

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const {name, nickname} = state;


    const onChange = event => {
        dispatch(event.target); // event.target 자체를 action값으로 사용했다.
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange}/>
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

export default Info2