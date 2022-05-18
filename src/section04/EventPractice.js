// class형 컴포넌트
import {Component} from "react";

class EventPractice extends Component {

    state = {
        message : '',
        username: ''
    }

    constructor(props) {
        super(props);
        // 클래스의 메소드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져버린다.
        // 임의의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩하는 작업이 필요하다.
        // 이렇게 바인딩 해주지 않으면 this는 undefined를 가리키게 된다.
        // 메서드 바인딩은 생성자 메서드에서 해준다.
        // 바벨의 transform-class-properties 문법을 사용하면 바인딩과정은 생략가능하다(매번 바인딩해주기 번거로우니까)
        // 위의 문법은 아래의 주석참고
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            // 객체안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용된다.
            [event.target.name]: event.target.value
        });
    }

    handleClick() {
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            message: '',
            username: ''
        });
    }

    // 바벨의 transform-class-properties 문법사용예시 start -------
    // handleChange = (event) => {
    //     this.setState({
    //         message: event.target.value
    //     });
    // }
    //
    // handleClick = () => {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     });
    // }


    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.handleClick();
        }
    }


    render() {
        return (
            <div>
                <h1>이벤트 연습 (class component)</h1>
                <input type={"text"} name={this.state.message} placeholder={"아무거나 입력해 보세용"} onChange={
                   event => {
                       //console.log(event.target.value);
                       this.setState({
                           message: event.target.value
                       })
                   }
                }/>
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button>
                <br/>

                <input type={"text"} name={"username"} placeholder={"사용자명"} value={this.state.username} onChange={this.handleChange}/>
                <input type={"text"} name={"message"} placeholder={"아무거나 입력해 보세용"} value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <button onClick={this.handleClick}>확인</button>

            </div>
        );
    }
}

export default EventPractice;