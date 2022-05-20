import Counter from "./Counter";
import Info from "./Info";
import {useState} from "react";
import Counter2 from "./Counter2";
import Info2 from "./Info2";
import Average from "./Average";
import Average2 from "./Average2";

const Eight = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Counter />
            <Counter2 />
            <br/>
            <button onClick={() => {
                setVisible(!visible);
            }}>
                {visible ? '숨기기' : '보이기'}
            </button>
            {visible && <Info/>}
            <br/>
            <Info2/>
            <br/>
            <br/>
            Average.js<br/>
            <Average/>
            Average2.js<br/>
            <Average2 />

        </>
    );
}

export default Eight