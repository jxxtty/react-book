import styled from "styled-components";
import NewsItem from "./NewsItem";
import {useState, useEffect} from "react";
import axios from "axios";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    
    @media screen and (max-width: 768px) {
        width: 100%,
        padding-left: 1rem;
        padding-right: 1rem;
    }
    `;

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
};

const NewsList = ({category}) => {

    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    // 컴포넌트가 처음 렌더링되는 시점에 API를 요청할 것 -> useEffect 사용
    // 주의할점 : useEffect에 등록하는 함수에 async를 붙이면 안된다. useEffect에서 반환해야하는 값은 뒷정리함수이기때문에
    //         따라서 useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어서 사용해야한다.
    useEffect(() => {
        // async를 사용하는 함수를 따로 선언
        const fetchData = async () => {
            setLoading(true); // 요청이 대기중일때는 loading값이 true

            try{
                const query = category === 'all' ? '': `&category=${category}`;
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ca597ab40f9e4734a056e894d556f892`);
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }

            setLoading(false); // 요청이 끝나고나면 loading값을 false로~
        }

        fetchData();
    }, [category]); // category값이 바뀌면 리렌더링

    // 대기중일때
    if(loading) {
        return <NewsListBlock>대기중 ...</NewsListBlock>
    }

    // 아직 articles 값이 설정되지 않았을때
    // 이걸 확인해주지 않으면 article이 nulldlfEo map함수가 실행되는 과정 중 렌더링 과정에서 오류가 발생한다.
    if(!articles) {
        return null;
    }

    // articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
}

export default NewsList