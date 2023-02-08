## create-react-app 기본 환경 세팅

```
npx create-react-app my-app
```

으로 리액트 앱을 설치하고 나서, 아래와 같은 명령어로 실행할 수 있다.

```
npm run start
```

실행을 종료하고 싶다면

```
^C
```

위와 같이 생성한 샘플 애플리케이션을 수정하면서 개발을 출발 할 수 있다.
먼저, public폴더 안에 index.html이 들어가 있는 것을 확인할 수 있다.

```html
<!-- public/index.html -->
<div id="root"></div>
```

![](https://velog.velcdn.com/images/ninto_2/post/99b2e17a-b7b0-4275-bdcd-e3868760c1c7/image.png)

지금 애플리케이션에서 보이는 이 화면은 index.html파일을 실행한 결과이다.
리팩트를 사용해서 컴포넌트들을 만들게 되면, 저 id가 root인 곳 안에 들어가도록 create-react-app이 초기설정을 한 것이다. (물론 이건 바꿀 수가 있다.)

이 root안에 들어가는 파일들은 src폴더 안에 있는 파일들이다.
따라서 앞으로 개발을 할 때에 모든 파일들은 src폴더 안에 넣게 된다.

그 중에서 entry파일 즉, 진입 파일은 `index.js`파일이다.

```js
// src/index.js
document.getElementById("root");
```

이 파일안에 id값이 'root'인 태그를 선택하는 자바스크립트를 기반으로 해서, html파일의 'root'가 되는 것이다.

```js
// src/index.js

import App from "./App";
<App />; // 컴포넌트의 이름은 대문자로 시작한다.
```

그 다음에, 바로 이 App이 리액트를 통해 만든 사용자 정의 태그, 즉 **컴포넌트** 이다.
그리고 이 컴포넌트의 실제 구현은 import를 통해서 './App'파일을 불러오는 구조이다.

![](https://velog.velcdn.com/images/ninto_2/post/73ca76b9-90a1-47c5-880c-6c3e85c5cd0b/image.png)

그림과 같이 리액트는 함수형과 클래스형으로 나누어져 있는데, 해당 실습은 클래스형 리액트 실습으로 진행된다.

이 create-react-app이 App파일이 변경될 때마다 자동으로 웹 브라우저를 리로드 해준다.

```js
return <div className="App">Hello, React!!</div>;
```

반드시 리액트는 하나의 태그 안쪽에 나머지 태그들이 존재해야 한다. (가장 바깥쪽에는 태그 하나가 있어야 한다.)

**리액트에서 CSS 수정하기**

```js
// src/index.js
import "./index.css";
```

```css
/* src/index.css */
body {
  background-color: powderblue;
}
```

index.js 파일에서 import로 './index.css'를 불러오기 때문에, index.css의 코드를 수정하면 웹에 css가 변경된다.

```js
// src/App.js
import "./App.css"; // App.css의 디자인을 App 컴포넌트에 넣는다.
```

![](https://velog.velcdn.com/images/ninto_2/post/7d85144a-dd8d-4e49-9a49-e93022400dbe/image.png)

웹브라우저에서 Networt창을 열고, 새로고침을 우클릭해보면 `캐시 비우기 및 강력 새로고침`을 클릭해서 파일의 리소스와 시간을 확인 할 수 있다.

기능이 아무것도 없는데도 불구하고 create-react-app이 개발의 편의성을 위해서 추가해놓은 상태이기 때문에 상당히 파일의 무게가 무겁다.

따라서, create-react-app은 개발환경을 실행시킬 때 `npm run start`를 썼는데 빌드 할 때에는

```
npm run build
```

를 사용하면 디렉토리 구조에서 이전에는 없었던 build라는 디렉토리가 생긴다.
이 build 파일을 열어보면 불필요한 용량을 줄이기 위해 공백이 모두 제거된 상태를 확인 할 수 있다.
결론적으로 실제로 서비스 할 때에는 build안에 있는 파일들을 사용하게 된다.

웹 서버가 루트를 찾는 최상위 디렉토리에 이 build디렉토리 안쪽에 있는 파일들을 위치시키면 된다.

```
-g serve // 어디에서나 serve라는 명령어를 통해 웹서버를 설치할 수 있다.
// npx serve는 한번만 실행시킬 웹서버를 실행시킬 수 있다.
npx serve -s build // serve라는 웹서버를 실행시킬 때 빌드라는 디렉토리를 document root로 하겠다는 것이다.
```

이렇게 Local주소를 받아서 웹에 들어가서 다시 리로드를 해보면, 이전보다 성능향상이 된 것을 확인할 수 있다.

리액트의 컴포넌트를 사용하게 되면, 가독성, 재사용성, 유지보수성이 높아진다.
컴포넌트들이 만약 한 파일에 모여 있으면, 다른 파일에서 해당 컴포넌트를 사용하기가 불편해지므로 컴포넌트당 하나의 파일로 분리하는 것이 좋다.

![](https://velog.velcdn.com/images/ninto_2/post/d7bcbd45-01c7-409f-8d55-f6e19924d7b9/image.png)

state의 개념은 props와 함께 살펴보아야 한다.
props는 사용자가 컴포넌트를 사용하는 입장에서 중요한 것이고, state는 그 props의 값에 따라 내부 구현에 필요한 데이터들이라고 볼 수 있다.

```jsx
<Component props_name="props_value">
```

이벤트는 props, state, event 3자가 서로 상호작용하면서 애플리케이션의 역동성을 만든다.

Create
Read 이 두가지는 핵심적인 오퍼레이션이다.
Update
Delete

지금까지는 리액트를 사용해서 Read하는 방법을 살펴보았다.

Create는 어떻게 리액트를 통해서 생성할 수 있을까를 생각해보아야 한다.
