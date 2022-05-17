// 클래스형 컴포넌트의 state
import { Component } from "react";

class Counter extends Component {
    // 1. 생성자를 이용해서 state 설정
    // constructor(props) {
    //     super(props);
    //
    //     // state의 초기값 설정
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }

    // 2. 생성자를 이용하지 않고 state 설정
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const {number, fixedNumber} = this.state; // state 조회시 this.state 이런식으로 사용
        return (
          <div>
              <h1>{number}</h1>
              <h2>바뀌지 않는 값 : {fixedNumber}</h2>
              <button onClick={() => {
                 this.setState({number: number+1}) // setState를 사용하여 state에 새로운 값을 넣는다. + this.setState는 상태가 비동기적으로 업데이트 된다.
              }}>+1 (v1)</button>


              {/* this.setState에 객체 대신 함수 인자 전달하기 (1번코드와 2번코드는 완전히 동일한 기능을 수행한다) */}
              {/* 1 */}
              <button onClick={() => {
                  this.setState(prevState => {
                      return {
                          number: prevState.number+1
                      }
                  })
              }}>+1 (v2-1)</button>

              {/* 2 */}
              {/* 함수에서 객체를 바로 반환한다*/}
              <button onClick={() =>{
                  this.setState(prevState => ({
                      number: prevState.number+1
                  }))
              }}>+1 (v2-2)</button>
          </div>
        );
    }
}

export default Counter;