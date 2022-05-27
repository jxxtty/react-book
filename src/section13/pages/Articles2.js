import {Outlet, navLink, NavLink} from "react-router-dom"; // NavLink import

// NavLink : 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 특정 스타일 or CSS 클래스를 적용하는 컴포넌트

const Articles2 = () => {
    // 리팩토링으로 ArticleItem컴포넌트로 이동
    // const activeStyle = {
    //     color: 'green',
    //     fontSize: 21
    // }


    return (
        <div>
            <Outlet/>
            <ul>
                {/* 이런식으로 반복되게 작성했는데, NavLink를 감싼 또 다른 컴포넌트(ArticleItem)를 만들어서 리팩토링했다.*/}
                {/*<li>*/}
                {/*    <NavLink to={"/articles/1"}*/}
                {/*             style={({isActive}) => (isActive ? activeStyle : undefined)}>*/}
                {/*        게시글 1*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                {/* <li>*/}
                {/*     <NavLink to={"/articles/2"}*/}
                {/*              style={({isActive}) => (isActive ? activeStyle : undefined)}>*/}
                {/*         게시글 2*/}
                {/*     </NavLink>*/}
                {/*</li>*/}
                {/* <li>*/}
                {/*     <NavLink to={"/articles/3"}*/}
                {/*              style={({isActive}) => (isActive ? activeStyle : undefined)}>*/}
                {/*         게시글 3*/}
                {/*     </NavLink>*/}
                {/* </li>*/}

                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
}

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21
    }

    return (
        <li>
            <NavLink to={`/articles/${id}`}
                     style={({isActive}) => (isActive ? activeStyle : undefined)}>
                게시글 {id}
            </NavLink>
        </li>
    )
}

export default Articles2