import {useLocation} from "react-router-dom";

const About = () => {
    const location = useLocation(); // useLocation은 location객체를 반환한다. 이 location객체는 현재 사용자가 보고있는 페이지의 정보를 지니고 있다.
                    // location 객체에 담긴 값들
                    // 1. pathname : 현재 주소의 경로(쿼리스트링 제외)
                    // 2. search : 맨 앞의 ? 문자를 포함한 쿼리스트링 값
                    // 3. hash : 주소의 # 문자열 뒤의 값(주로 History API가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용)
                    // 4. state : 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
                    // 5. key : location 객체의 고유값, 초기에는 default이며 페이지가 변경될 때마다 고유의 값이 생성됨

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 프로젝트입니다!</p>
            <p>쿼리스트링 : {location.search}</p> {/* http://localhost:3000/about?detail=true&mode=1 => 쿼리스트링 : ?detail=true&mode=1 */}
        </div>
    );

    // location.search를 할 경우 ?를 포함하여 &문자까지 포함된 모든것이 딸려온다.
    // 여기서 ?와 &을떼고 key와 value로 파싱하는 작업이 필요한데, 이는 npm에서 "qs"또는 "querystring"패키지를 설치해 처리할 수 있다.
    // 쿼리스트링을 따로 파싱까지하기에는 번거로울 수도 있는데, 리액트라우터v6부터 "useSearchParams"라는 Hook을 제공해 쿼리스트링을 더욱 쉽게 다룰 수 있다. -> About2.js 참고
}

export default About