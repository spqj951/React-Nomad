

# React공부 정리

[20220715](#20220715)

[20220716](#20220716)

[20220717](#20220717)

[20220718 Map()](#20220718 Map())





# 20220715

# 바닐라 JS와 React.js의 차이점

### 바닐라 JS 코드

```jsx
<!DOCTYPE html>
<html lang="en">

<body>
    <span>Totle clicks: 0</span>
    <button id="btn">Click me</button>
</body>
<script>
    let counter = 0;
    const button = document.getElementById("btn");
    const span = document.querySelector("span");
    function handleClick(){
        counter = counter+1;
        span.innerText = `Total clicks: ${counter}`;
    }
    button.addEventListener("click", handleClick);
</script>
</html>
```

기본적으로

- html 생성
- js를 통해 속성 찾기
- event 생성 후 감지
- 데이터 업데이트
- html 업데이트

의 순서를 가진다.

### React.js 코드

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="<https://unpkg.com/react@17.0.2/umd/react.production.min.js>"></script>
    <script src="<https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js>"></script>
    <script src="<https://unpkg.com/@babel/standalone@7.18.8/babel.min.js>"></script>
  </head>
  <body>
    <div id="root"></div> //처음 빈 div를 만들어 ReactDOM을 통해 React element를 담는다.
  </body>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App() {
      const [counter, setCounter] = React.useState(0);
      function onClick() {
        setCounter(counter + 1); //리렌더링을 자동으로 해줌
      }
      return (
        <div>
          <h3>Total clicks : {counter}</h3>
          <button onClick={onClick}>Click me</button>
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>

//React는 UI가 interactive하게 작동할 수 있도록 해주는 엔진
//ReactDOM은 Reacte element를 html로 보내주는 역할을 한다.
//함수 형태로 만들어 컴포넌트를 여러번 재사용할 수 있으며 컴포넌트의 앞글자는 무조건 대문자로 시작하여야 한다.
//babel를 이용하여 jsx로 만든 코드를 react로 브라우저가 인식할 수 있도록 변환한다.
```

React는

- js 내에서 jsx라는 확장된 문법을 통해 html과 같은 형식으로 짜여진 코드로 진행하여 쉽게 사용할 수 있다.
- 이로 인해 html에서 정한 변수명을 찾는 시간을 없애고 js 내에서 바로 대부분의 것들을 통제할 수 있어 편한 사용이 가능하다.

### React.js 그 외 내용

- useState를 활용해 데이터와 데이터를 컨트롤하는 setter함수의 배열을 얻을 수 있다.
- 이를 활용해 재렌더링을 react가 스스로 할 수 있어 rerendering에 대한 부담을 없앨 수 있다.
- React는 바닐라 JS와 달리 재렌더링을 하더라도 모든 부분을 재생성하는 것이 아닌 값이 바뀌는 부분만을 재생성해준다.

----

# 20220716

- setCounter의 두 가지 사용법

  - 직접 값을 입력하기

  - 함수로 만들어 넣기

    ** 현재 값을 정확하게 넣기 위해 (다른 곳에서 바꾸었을 수도 있으므로) ‘current’라는 값을 사용

- jsx는 html과 같지만 다르다

  - ex) class ⇒ className으로, for  ⇒ htmlFor로 (import 한 것이 다를 경우를 위해서임 (production → develope)

- 기본적으로 input값은 uncontrolled이기에 state를  활용해 value값과 연동시켜 외부에서도 통제가능하도록 만든다.

- event.target.value를 사용해 document.get~~~ 없이 직접 쉽게 가져올 수 있다.

- {}를 활용해 if문 활용이 가능하고, 없을 시 단순한 text로 인식한다.

# 20220717

- Props

  - 코드가 길어지다 보면 반복 사용되는 것이 있고, 그러한 것을 보다 용이하게 하기 위해 props를 활용한다.

  - 하나의 부모 함수를 만들어 그것을 컴포넌트로 사용하는데

    부모 함수의 첫 번째 인자에 props로 사용할 것들의 키 값을 넣으면 된다.

  - 각 컴포넌트에 props로 들어간 것들은 모두 부모 함수의 첫 인자에 객체로서 담기게 된다.

  - 배열로 담기기에 {}로 표기한다.

  - 동일한 부모 함수로 부터 생긴 컴포넌트의 경우 state와 연결된 props를 가진 컴포넌트가 하나라도 있을 경우, 모든 동일 컴포넌트들이 재렌더링하게 되며 이는 비효율을 초래한다. 그러므로 React.memo를 활용해 state와 연결된 props를 가진 컴포넌트만이 재렌더링 되도록 한다.

  - 컴포넌트의 props와 부모 함수의 인자의 이름이 같으면 하나만 써도 된다. ex: props이름 font-size, 인자 font-size ⇒ font-size : font-size 할 필요 없이 font-size로 끝

  - propTypes를 활용해 props에 아무 형태의 값을 쓰는 것을 막는다.

    - isRequired를 붙이면 필수로 사용해야하는 props가 된다.

- CRA(Create-React-App)

  - react프로젝트를 보다 쉽게 만들 수 있도록 해준다.
  - npx create-react-app으로 설치
  - npm start로 서버 시작
  - gloabl css를 원하지 않을 경우 원하는 파일명에 .module.css를 붙여 만들고 이를 styles로 import하여 사용하는데 이는 객체 형태이기에 객체처럼 사용할 수 있으며 클래스 명 생성시 랜덤으로 제공해준다.

- useEffect

  - 특정코드가 component를 처음 렌더링되었을 때만 실행되도록 하는 기능

  - state하나의 값이 변화 되었을 때 그 state가 포함된 컴포넌트가 모두 재렌더링되는 것은 비효율적이며, 이때 원하지 않는 state도 재렌더링 될 수가 있기 때문에 하나만을 집어 원할때만 재렌더링 해주는 기술이 필요하다. 이것이 useEffect

    ```jsx
    useEffect(function(){
    console.log("i run only keyword is changed");
    }, [keyword]);
    ```

  - 첫 번째 인자에 원하는 함수를 넣고, 두 번째 인자에는 지켜볼 값을 넣는다.

  - useEffect에서 사용되는 함수가 다른 함수를 리턴함으로써 cleanUp function을 발생시킬 수 있는데 이는 컴포넌트가 파괴되었을 때 로그를 남길 수 있다는 장점이 있다.

# 20220718 Map()

- JavaScript의 map함수
  - 하나의 필터라고 생각하면 된다.
  - 인자로 하나의 함수를 넣으며 인자로 쓰인 함수의 첫 번째 인자는 배열의 값들을, 두번째 인자는 값들의 인덱스를 의미한다. 이후 값으로 혹은 필터로 쓰일 내용을 적어준다.
