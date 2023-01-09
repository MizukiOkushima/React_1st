import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import CodeContext from "./main";

function App() {
  // let count = 0;

  // useStateというを使うHooksを使う。上記でimportしておくこと。
  // useState(0) 0で初期化
  const [count, setCount] = useState(0);

  // Contextを使用する useContextというHooksを使用する
  const codeInfo = useContext(CodeContext);

  // useRefというHooksを使用する。Reference 参照するという意味。タグの詳細情報を参照できる。
  const ref = useRef();

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

  const handleRef = () => {
    // inputタグの入力情報の詳細を参照する。
    console.log(ref.current.value);
    // inputタグの高さの詳細を参照する。
    console.log(ref.current.offsetHeight);
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{codeInfo.name}</p>
      <p>{codeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>
    </div>
  );
}

export default App;
