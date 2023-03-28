import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({votes: 0, comments: []});
    const { articleId } = useParams();

    useEffect(() => {
        console.log(articleId);
       const loadArticleInfo = async () => {
          const response = await axios.get(`http://localhost:8000/api/articles/${articleId}`); 
          console.log(response);
          const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
       }
       loadArticleInfo();       
    }, []);

    
    //const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    const addVote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/vote`);
        const updateArticle = response.data;
        setArticleInfo(updateArticle);
    }

    if (!article){
        return <NotFoundPage />
    }

    return (
        <>
          <h1>{article.title}</h1>
          <div className="votes-section">
               <button onClick={addVote}>Vote</button>
               <p>This article has {articleInfo.votes} vote(s).</p>
          </div>
        {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}   
        <CommentsList comments={articleInfo.comments} />
        </>
       
    )
}

export default ArticlePage;