import './App.css';
import React, { Component } from 'react';

/*
리액트 클래스형 컴포넌트 만들기
컴포넌트 안에는 반드시 하나의 태그안에서 작성되어야 한다.
아래 SUbject 컴포넌트에서는 <header>태그가 최상위 태그이다.
*/
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

/*
이 코드들은 모두 유사 자바스크립트이다.
즉, 자바스크립트가 아니다. (jsx문법)
creat-react-app에서 jsx를 사용하면 알아서 자바스크립트 코드로 컨버팅을 해준다.
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject/>
      </div>
    );
  }
}

export default App;
