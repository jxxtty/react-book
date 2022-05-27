function increase(number, callback) {
    setTimeout(() => {
        const result = number + 10;
        if (callback) {
            callback(result);
        }
    }, 1000);
}

const CallBackExample = () => {
    // 1초 뒤에 파라미터값(0)에 10을 더해서 반환한다.
    // increase(0, result => {
    //     console.log(result);
    // });

    // 1초에 걸쳐서 10, 20, 30, 40과 같은 형태로 여러번 순차적 처리하고싶다면, 콜백함수를 중첩해서 구현하면 된다.
    console.log('작업 시작!------');
    increase(0, result => {
        console.log(result);
        increase(result, result => {
            console.log(result);
            increase(result, result => {
                console.log(result);
                increase(result, result => {
                    console.log(result);
                    console.log('작업 완료!------');
                })
            })
        })
    });
    // => 콜백 안에 또 콜백을 넣어서 구현할 수 있는데, 너무 여러번 중첩되면 코드의 가독성이 다음과같이 떨어진다.
    //    이런 형태의 코드를 '콜백 지옥'이라고 부른다. 웬만하면 지양해야할 형태의 코드다.
}

export default CallBackExample


