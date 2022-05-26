import produce from "immer";
// immer를 사용하면 불변성을 유지하는 작업을 매우 간단하게 처리할 수 있다.
// produce 함수를 사용하는데 이 함수는 두가지 파라미터를 받는다.
//   첫번째 파라미터 : 수정하고 싶은 상태
//   두번째 파라미터 : 상태를 어떻게 업데이트할지 정의하는 함수 -> 이 함수 내부에서 원하는 값을 변경하면 produce함수가 불변성을 유지하면서 새로운 상태를 생성해준다.

// immer 라이브러리의 핵심은 "불변성에 신경쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해주는 것"이다.
const originalState = [
    {
        id: 1,
        todo: '전개 연산자와 배열 내장 함수로 불변성 유지하기',
        checked: true
    },
    {
        id: 2,
        todo: 'immer로 불변성 유지하기',
        checked: false
    }
];

const nextState = produce(originalState, draft => {
    // id가 2인 항목의 checked값을 true로 변경하려한다.


    const todo = draft.find(t => t.id === 2); // id로 항목 찾기
    todo.checked = true; // or draft[1].checked = true;

    // 배열에 새로운 데이터 추가
    draft.push({
        id: 3,
        todo: '일정 관리 앱에 immer 적용하기',
        checked: false
    });

    // id = 1 인 항목을 제거하기
    draft.splice(draft.findIndex(t => t.id === 1));
})