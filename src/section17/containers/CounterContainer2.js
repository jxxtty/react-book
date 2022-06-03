// connect 함수를 사용할 때는 일반적으로 CounterContainer.js 처럼 "mapStateToProps"와 "mapDispatchToProps"를 미리 선언해놓고 사용한다.
// 하지만 connect 함수 내부에 익명함수 형태로 선언해도 문제가 없다.
// 코드가 훨씬 깔끔해진다.

import Counter, {decrease, increase} from "../modules/counter";
import {connect} from "react-redux";
// import {bindActionCreators} from "redux"; // bindActionCreators import

const CounterContainer2 = ({number, increase, decrease}) => {
    return (
        <Counter number={number} increase={increase} decrease={decrease} />
    );
}

export default connect(
    state => ({
        number: state.counter.number
    }),
    dispatch => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    })
) (CounterContainer2)


// 1. bindActionCreators 사용하는 방법
// 컴포넌트에서 액션을 디스패치하기 위해 각 액션생성함수를 호출하고 dispatch로 감싸는 작업이 번거로울 수 있다. 특히 액션생성함수가 많아지면 더더욱 번거롭게 느낄 수 있다.
// 이럴때 리덕스에서 제공하는 bindActionCreators를 사용하면 간편하게 해결할 수 있다.

// export default connect(state => ({
//     number: state.counter.number
// }),
//     dispatch => bindActionCreators({
//         increase, decrease
//     }, dispatch)
// ) (CounterContainer2)


// 2. mapDispatchToProps의 파라미터를 함수형태가 아니라 객체형태로 넣어주는 방법
// 액션생성함수로 이루어진 객체 형태로 넣어준다.

// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     {increase, decrease}
// ) (CounterContainer2)