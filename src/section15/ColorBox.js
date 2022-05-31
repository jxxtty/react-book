import ColorContext from "./context/color";
import {ColorConsumer} from "./context/color";
import {useContext} from "react";

// ColorBox : ColorContext 안에 들어있는 색상을 보여준다.
// 이때 props로 받아오는것이 아니라 ColorContext안에 들어있는 Consumer 컴포넌트를 통해 색상을 조회한다.
const ColorBox = () => {
    return (
        <ColorConsumer>
            {value => (
                <>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: value.state.color
                    }}/>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: value.state.subcolor
                    }}/>
                </>
            )}
        </ColorConsumer>
    );
}


// 리액트에 내장되어있는 Hooks 중에서 useContext라는 Hook을 사용하면, 함수형 컴포넌트에서 Context를 아주 편하게 사용할 수 있다.
// const ColorBox2 = () => {
//     const {state} = useContext(ColorContext);
//     return (
//         <>
//             <div style={{
//                 width: '64px',
//                 height: '64px',
//                 background: state.color
//             }} />
//             <div style={{
//                 width: '32px',
//                 height: '32px',
//                 background: state.subcolor
//             }} />
//         </>
//     );
// }

export default ColorBox