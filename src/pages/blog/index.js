import React from 'react';
import './index.less'

const articles = [
  { id: 1, title: '文章标题 1', content: '这是文章内容 1' },
  { id: 2, title: '文章标题 2', content: '这是文章内容 2' },
  { id: 3, title: '文章标题 3', content: '这是文章内容 1' },
  { id: 4, title: '文章标题 4', content: '这是文章内容 2' },
  { id: 5, title: '文章标题 5', content: '这是文章内容 1' },
  { id: 6, title: '文章标题 6', content: '这是文章内容 2' },
  // 你可以在这里添加更多的文章
];

const Blog = () => {


    return (
    <div className="article-list">
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Blog;
