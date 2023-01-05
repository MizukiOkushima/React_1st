import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // let count = 0;

  // useStateというを使うHooksを使う。上記でimportしておくこと。
  // useState(0) 0で初期化
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // count++;
    // console.log(count);

    // setCountを使ってレンダリングする。
    // VDOM 仮想DOMの説明。差分を見てDOMのレンダリングを行うため処理が軽い。
    setCount(count + 1);
  };

  // useEffect コールバック関数。発火のタイミングを決めることが出来る。
  // 空の配列[]を第2引数に設定することでページがマウントされたときに発火される。
  // React.StrictModeが入っていると厳格なモードで2回発火されるため注意。 ProductionModeなら1回のみ発火。
  // [count]とするとcountのデータが更新するときに発火される。
  useEffect(() => {
    console.log("Hello Hooks");
  }, [count]);

  return (
    <div className="App">
      <h1>UseState</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
