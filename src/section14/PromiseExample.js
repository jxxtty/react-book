// Promise : 콜백 지옥과 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된 기능이다.
// 여러 작업을 연달아 처리한다고 해서 함수를 여러번 깜싸는 것이아니라 .then을 사용하여 그다음 작업을 설정하기때문에 콜백지옥이 형성되지 않는다.

function increase(number) {
    const promise = new Promise((resolve, reject) => {
        // resolve는 성공, reject는 실패
        setTimeout(() => {
            const result = number + 10;

            if (result > 50) {
                // 50보다 높으면 에러 발생시키기 - reject처리되게 만들어서 멈추게
                const e = new Error('Number Too Big');
                return reject(e);
            }

            resolve(result); // number값에 +10 후 성공처리
        }, 1000);
    });
    return promise;
}

const PromiseExample = () => {
    increase(0)
        .then(number => {
            // Promise에서 resolve(성공)된 값은 .then을 통해 받아올 수 있다.
            console.log(number);
            return increase(number);
        })
        .then(number => {
            console.log(number);
            return increase(number);
        })
        .then(number => {
            console.log(number);
            return increase(number);
        })
        .then(number => {
            console.log(number);
            return increase(number);
        })
        .then(number => {
            console.log(number);
            return increase(number);
        })
        .then(number => {
            console.log(number);
            return increase(number);
        })
        .catch(e => {
            // 도중에 에러가 발생한다면 여기서 잡힌다.
            console.log(e);
        });
}

export default PromiseExample