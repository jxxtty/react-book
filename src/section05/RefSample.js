import {Component, createRef} from "react";

class RefSample extends Component {
    input = createRef();

    handleFocus = () => {
        this.input.current.focus(); // ref를 설정해준 DOM에 접근하려면 "this.input.current"로 접근한다.
    }

    render() {
        return (
            <div>
                <input ref={this.input}/>
            </div>
        );
    }
}

export default RefSample