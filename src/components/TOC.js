import React, { Component } from 'react';

// 외부 App에서 props를 전달받았기 때문에 this.props.data를 가지고 있다.
// TOC의 데이터가 바뀌었다고, TOC의 로직을 바꾸지 않아도 되는 상태로 만듬
// 하지만 여러개의 엘리먼트를 자동으로 생성하는 경우에는 콘솔을 켜면 에러가 발생한다.
// 각각의 리스트 항목들은 key라는 props를 가지고 잇어야 하므로 여러개의 목록을 자동으로 생성할 때에는 
// key = {} 각각의 목록들을 구분할 수 있는 식별자를 넣어준다.
class TOC extends Component  {
  render() {
    let lists = [];
    const data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      lists.push(<li key={data[i].id}><a href={"/content/"+ data[i].id}>{data[i].title}</a></li>)
    }

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default TOC;