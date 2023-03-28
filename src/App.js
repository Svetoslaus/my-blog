import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {
  //const [articleInfo, setArticleInfo] = useState();
 // useEffect(() => {
  //  const loadArticleInfo = async () => {
   // const response = await axios.get('http://localhost:8000/api/articles/cs50lastproject');
   // const data = response.data;
   // setArticleInfo(data);
//}
//loadArticleInfo();  

//})
//console.log(articleInfo);
  return (
    <BrowserRouter>
     <div className="App">
      <NavBar />
        <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/articles" element={<ArticleListPage/>} />
          <Route path="/articles/:articleId" element={<ArticlePage/>} />
          <Route path="*" element={<NotFoundPage/>}></Route> 
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
    
}

export default App;


