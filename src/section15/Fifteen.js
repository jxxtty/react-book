import ColorBox from "./ColorBox";
import ColorContext, {ColorProvider} from "./context/color";
import SelectColors from "./SelectColors";

// Context를 사용하지 않은 상태에서 컴포넌트 간에 상태를 교류해야 할 때 무조건 "부모 -> 자식" 흐름으로 props를 통해 전달해줘야 했다.
// 프로젝트의 컴포넌트 구조가 간단하고 다루는 상태의 종류가 그다지 많지 않다면 굳이 Context를 사용할 필요는 없다.
// 하지만 전역적으로 여기저기서 사용되는 state가 있고 컴포넌트의 개수가 많은 상황이라면 Context API를 사용하는 것을 권장한다.


const Fifteen = () => {

    // createContext로 넣어준 기본값은 Provider를 사용하지 않았을 때만 사용된다.
    // 만약 Provider는 사용했는데 value를 명시하지 않았다면, 이 기본값을 사용하지 않기 때문에 오류가 발생한다. => Provider를 사용할 때는 value 값을 명시해줘야 제대로 작동한다!
    return(
        <ColorProvider>
            <div>
                <SelectColors />
                <br/>
                <ColorBox />
            </div>
        </ColorProvider>
    )
}

export default Fifteen