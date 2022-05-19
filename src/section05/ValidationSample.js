import {Component} from "react";
import './ValidationSample.css'

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus(); // ref 추가
    }

    render() {
        return (
            <div>
                <input type={"password"} value={this.state.password}
                       ref={(ref) => this.input = ref} // 콜백함수를 사용하여 ref
                       onChange={this.handleChange}
                       className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample