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
props의 값들이 하드코딩 되있어 불편하다. 따라서 저 값들을 state로 만들고, 그 state의 값을 Subject의 props로 전달하는 것을 통해서 코드를 개선해보자.
클래스형 컴포넌트에서 state를 만드는 방법: 어떠한 컴포넌트가 실행될 때 render함수보다 먼저 실행이 되면서 그 컴포넌트를 초기화시켜주고 싶은 코드는 constructor안에다가 코드를 작성한다.
TOC의 부모인 App이 TOC가 가지고 있는 데이터를 사용해서 TOC의 내부 데이터가 바뀔 수 있게끔 만들어보자.
리액트에서는 props나 state가 바뀌면, 그것들을 가지고 있는 컴포넌트의 render함수가 다시 호출된다.

*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: {title: 'WEB', sub: "world wide web!" },
      welcome: {title: 'Welcome', desc:'Hello, React!'},
      contents: [
        {id: 1, title: 'HTML', desc:'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
      ]
    }
  }

  // a를 클릭했을때 어떠한 자바스크립트 코드가 실행되게 만들어보자.
  // 자바스크립트에선 onclick=''이지만, jsx에선 onClick={} 이다.
  // event.preventDefault()는 a의 기본적인 동작을 막는다. 페이지가 전환되지 않음

  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      /*
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
      */
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}
        onChangePage = {function () {
          this.setState({mode: 'welcome'});
        }.bind(this)}
        />
        <Subject title="React" sub="For UI"/>
      {/*<header>
        <h1>
          <a href='/' onClick={function (e) {
            e.preventDefault();
            //this.state.mode = 'welcome'; 이벤트가 실행될때 호출되는 이 함수 안에서는 this의 값이 컴포넌트 자기 자신이 아니라 아무값도 세팅되어있지 않다.
            //이벤트 안에서 this를 사용할 수 없어서 에러가 발생하면 bind(this)를 사용한다.
            //그리고 setState()안에 객체를 넣어주어야 한다.
            // 이미 컴포넌트가 생성이 끝난 다음에 동적으로 state의 값을 변경해주고 싶다면 this.state.mode = 'welcome' 이런식으로 사용해선 절대 안된다.
            // 즉, this의 setState라는 함수에 변경하고 싶은 값을 객체형태로 주는것을 통해 고쳐야한다.
            // 항상 state의 값이 바뀌면 setState()로 바꿔주어야 한다.
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>
            {this.state.subject.title}
          </a>
        </h1>
        {this.state.subject.sub}
        </header>*/}
        
        <TOC 
        onChangePage= {
          function(id) {
            this.setState({
          mode: 'read',
          selected_content_id: Number(id),
          });

          }.bind(this)
        }
        data={this.state.contents}/>
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
