import { useContext, useEffect, useState } from "react";
import "./App.css";
import CodeContext from "./main";

function App() {
  // let count = 0;

  // useStateというを使うHooksを使う。上記でimportしておくこと。
  // useState(0) 0で初期化
  const [count, setCount] = useState(0);

  // Contextを使用する useContextというHooksを使用する
  const codeInfo = useContext(CodeContext);

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

    // useEffectの中でset関数を使うと無限に読み込んでしまうため注意
    // setCount(count + 1);
  }, [count]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{codeInfo.name}</p>
      <p>{codeInfo.age}</p>
    </div>
  );
}

export default App;
