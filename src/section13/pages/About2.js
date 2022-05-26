import {useSearchParams} from "react-router-dom";

const About2 = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // useSearchParams는 배열 타입의 값을 반환한다.
    //    첫번째 원소 : 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체
    //          -> get메서드를 통해 특정 쿼리 파라미터를 조회할 수 있고, set메서드를 통해 특정 쿼리파라미터를 업데이트할 수 있다.
    //    두번째 원소 : 쿼리파라미터를 객체 형태로 업데이트 할 수 있는 함수

    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail === 'true' ? false : true}); // 쿼리파라미터 값은 무조건 문자열! 따라서 ''로 감싸서 비교해야한다.
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode)+1;
        setSearchParams({mode: nextMode, detail});
    }

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            <p>detail : {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle Detail</button>
            <button onClick={onIncreaseMode}>mode+1</button>
        </div>
    );

}

export default About2