import React from 'react';
import './index.less'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='page'>
       <div className='content'>
          <p className='title'>你好 我是豆腐Tofu</p>
          <p className='text'>欢迎收听我的博客</p>
          <Link className='btn' to="/home">BLOG</Link>
       </div>
    </div>
  );
};


export default Home;
