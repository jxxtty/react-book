import {ColorConsumer} from "./context/color";
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// 마우스 왼쪽클릭시 큰 정사각형의 색상을 변경, 오른쪽 클릭시 작은 정사각형의 색상을 변경


const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
                {({actions}) => (
                    <div style={{display: 'flex'}}>
                        {colors.map(color => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={event => {
                                    event.preventDefault(); // 마우스 오른쪽 클릭 시 메뉴가 뜨는것을 무시한다.
                                    actions.setSubcolor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
        </div>
    );
}

export default SelectColors