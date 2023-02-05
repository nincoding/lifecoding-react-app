import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

/*
리액트 클래스형 컴포넌트 만들기
컴포넌트 안에는 반드시 하나의 태그안에서 작성되어야 한다.
아래 SUbject 컴포넌트에서는 <header>태그가 최상위 태그이다.

props를 통해 외부에서 전달받는다.
컴포넌트별 파일로 별로 분리
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
*/

/**
 * 보통 TOC가 Table Object Content 목차라는 뜻으로 많이 쓰인다.
컴포넌트별 파일로 별로 분리
class TOC extends Component  {
  render() {
    return (
      <nav>
        <ul>
          <li><a href='1.html'>HTML</a></li>
          <li><a href='2.html'>CSS</a></li>
          <li><a href='3.html'>JavaScript</a></li>
        </ul>
      </nav>
    )
  }
}
*/

/* 컴포넌트별 파일로 별로 분리
class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}
*/

/*
이 코드들은 모두 유사 자바스크립트이다.
즉, 자바스크립트가 아니다. (jsx문법)
creat-react-app에서 jsx를 사용하면 알아서 자바스크립트 코드로 컨버팅을 해준다.
Subject 컴포넌트안에 서로 다른 props를 전달함으로서 항상 같은 값을 출력하던 컴포넌트를 효율성 있게 리팩토링하였다.
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"/>
        <Subject title="React" sub="For UI"/>
        <TOC/>
        <Content title='HTML' desc="HTML is HyperText Markup Language."/>
      </div>
    );
  }
}

export default App;
