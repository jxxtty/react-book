import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodoContainer from "./containers/TodoContainer";

// '프레젠테이셔널 컴포넌트'와 '컨테이너 컴포넌트'를 분리한다
//      - 프레젠테이셔널 컴포넌트 : 상태관리가 이뤄지지 않고, 그저 props만 받아와서 화면에 UI를 보여주기만 하는 컴포넌트 ===> components 디렉토리
//      - 컨테이너 컴포넌트 : 리덕스와 연동되어있는 컴포넌트로, 리덕스로부터 상태를 받아오기도 하고 리덕스 스토어에 액션을 디스패치하기도 한다. ===> containers 디렉토리

const Seventeen = () => {
    return (
        <div>
            {/*<Counter number={0}/>*/}
            <CounterContainer />
            <br/>
            {/*<Todos />*/}
            <TodoContainer />
        </div>
    );
}

export default Seventeen