// 1. useSelector
// 리덕스 스토어와 연동된 컨테이너 컴포넌트를 만들 때 connect 함수를 사용하는 대신 react-redux에서 제공하는 Hooks를 사용할 수도 있다.
// useSelector Hook을 사용하면, connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.
// const 결과 = useSelector(상태 선택 함수);

// 2. useDispatch
// 이 Hook은 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해준다.
// 컨테이너 컴포넌트에서 액션을 디스패치해야 한다면 "useDispatch"를 사용하면 된다.
// const dispatch = useDispatch();
//
// return (
//     <Counter
//         number={number}
//         onIncrease={() => dispatch(increase())}
//         onDecrease={() => dispatch(decrease())}
//     />
// );
// 위와같이만 작성한다면 숫자가 바뀌어 컴포넌트가 리렌더링될 때마다 onIncrease 함수와 onDecrease함수가 새롭게 만들어지게된다.
// 컴포넌트 성능을 최적화해야 하는 상황이라면 useCallback으로 액션을 디스패치하는 함수를 감싸줘야한다.


import {useDispatch, useSelector} from "react-redux";
import Counter from "../components/Counter";
import {increase, decrease} from "../modules/counter";
import {useCallback} from "react";

const CounterContainer3 = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (
        <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
    />
    );
}

export default CounterContainer3