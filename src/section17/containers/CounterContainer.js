import Counter from "../components/Counter";
import {connect} from "react-redux";
import {decrease, increase} from "../modules/counter";

// 리덕스 스토어와 연동된 컴포넌트를 "컨테이너 컴포넌트"라 부른다.
// 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아오고, 또 액션도 디스패치해준다.


const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>;
}

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
const mapStateToProps = state => ({
    number: state.counter.number
});

// 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
const mapDispatchToProps = dispatch => ({
    // 임시함수
    increase: () => {
        console.log('increase');
        dispatch(increase());
    },
    decrease: () => {
        console.log('decrease');
        dispatch(decrease());
    }
});

// mapStateToProps와 mapDispatchProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
// mapStateToProps는 state를 파라미터로 받아오며, 이 값은 현재 스토어가 지니고있는 상태를 가리킨다.
// mapDispatchProps의 경우 스토어의 내장함수 dispatch를 파라미터로 받아온다.

// connect 함수를 사용해서 컴포넌트와 리덕스를 연동해준다.
// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)