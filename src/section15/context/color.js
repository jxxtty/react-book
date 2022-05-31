import {createContext, useState} from "react";

// Context 생성할 때는 'createContext' 함수를 사용한다.
// 파라미터에는 해당 Context의 기본 상태를 지정한다.
// const ColorContext = createContext({color: 'black'});

// 파라미터에 Context 기본값으로 상태값이아니라 함수를 전달할 수도 있다.

const ColorContext = createContext({
    state: {color: 'black', subcolor: 'red'},
    action: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: {color, subcolor},
        actions: {setColor, setSubcolor}
    };

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    )
}

// const ColorConsumer = ColorContext.Consumer
const {Consumer: ColorConsumer} = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export {ColorProvider, ColorConsumer}

export default ColorContext