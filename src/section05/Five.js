import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import {Component} from "react";


class Five extends Component {
    render() {
        return (
            <>
                <ValidationSample />
                <ScrollBox ref={(ref) => this.scrollBox = ref} />
                <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
                {/* 문법상으로는 onClick={this.scrollBox.scrollToBottom()}으로 작성해도 된다. 그러나 이렇게 작성한 이유는, */}
                {/* 컴포넌트가 처음 렌더링될 때 this.scrollBox값이 undefined이므로 위와같이 작성하게되면 오류가 발생한다. */}
                {/* 화살표함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 this.scrollBox.scrollToBottom()메서드를 실행하게 되면 */}
                {/* 버튼을 누를 때(이미 한 번 렌더링을 해서 this.scrollBox를 설정한 시점) this.scrollBox.scrollToBottom을 읽어오기때문에 오류가 발생하지 않는다. */}
            </>
        );
    }
}

export default Five