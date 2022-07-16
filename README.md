

# 20220715

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
