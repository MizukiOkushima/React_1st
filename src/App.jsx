import { useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import "./App.css";
import CodeContext from "./main";

const reducer = (state, action) => {
  // 加算と減算のアクション
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  // let count = 0;

  // useStateというを使うHooksを使う。上記でimportしておくこと。
  // useState(0) 0で初期化
  const [count, setCount] = useState(0);

  // Contextを使用する useContextというHooksを使用する
  const codeInfo = useContext(CodeContext);

  // useRefというHooksを使用する。Reference 参照するという意味。タグの詳細情報を参照できる。
  const ref = useRef();

  // useReducer 初期値0
  // state 更新されたstate
  // dispatch reducerに対しての通知
  const [state, dispatch] = useReducer(reducer, 0);

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

  // useMemo メモ化することができる（パソコンのメモリに保存する）
  // useStateを使って下準備してみる
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   // 200万回繰り返したらインプリメントする重い処理
  //   // 重い処理を実装しているため、各ボタンを押した時の全体の差分をチェックした時にここの処理が実行されてしまう。
  //   while (i < 200000) {
  //     i++;
  //   }
  //   console.log("クリックされました");
  //   return count02 * count02;
  // };

  // 上記squareをuseMemo()でラッピングすると使用可能
  // 第２引数[count02] 依存関係を設定 count02が更新されたときだけ重い処理を走らせる
  // useMemoでメモリに保存されたデータをそのまま返す
  const square = useMemo(() => {
    let i = 0;
    // 200万回繰り返したらインプリメントする重い処理
    // 重い処理を実装しているため、各ボタンを押した時の全体の差分をチェックした時にここの処理が実行されてしまう。
    while (i < 2000000) {
      i++;
    }
    console.log("クリックされました");
    return count02 * count02;
  },[count02]);

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

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({type: "increment"})}>＋</button>
      <button onClick={() => dispatch({type: "decrement"})}>―</button>

      <hr />
      <h1>useMemo</h1>
      <div>カウント１：{count01}</div>
      <div>カウント２：{count02}</div>
      <div>結果：{square}</div>
      <button onClick={()=> setCount01(count01 +1)}>＋</button>
      <button onClick={()=> setCount02(count02 +1)}>＋</button>
    </div>
  );
}

export default App;
