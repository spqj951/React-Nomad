import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye");
    };
  });
  useEffect(function () {
    console.log("hi");
    return function () {
      console.log("bye");
    };
  });

  return <h1>Hello</h1>;
}
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const showHide = () => setShowing((prev) => !prev);
  console.log("i run all the time");
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    console.log("Call the api");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      {showing ? <Hello /> : null}
      <Button onClick={onClick} text={"Continue"} />
      <Button onClick={showHide} text={showing ? "Hide" : "Show"} />
    </div>
  );
}

export default App;
