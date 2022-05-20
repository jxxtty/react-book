// 커스텀 Hooks얹기
import {useState, useEffect} from "react";
import useInputs from "./useInput";

const Info3 = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name]);


    return (
        <div>
            <div>
                <input value={name} onChange={onChange}/>
                <input value={nickname} onChange={onChange}/>
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

export default Info3