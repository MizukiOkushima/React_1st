import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// グローバルで共有するデータ
const codeInfo = {
  name: "code",
  age: 33,
};

// Context Contextは頭文字も大文字で宣言することが多い
// createContext reactに含まれる関数 グローバルで生成するContextを生成できる codeInfoをグローバルで使えるように宣言する
const CodeContext = React.createContext(codeInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  // CodeContext.Provider Appコンポーネントでグローバルで共有しているデータを使えるようにする
  // valueで共有したいデータを指定すること codeInfoを指定する
  <CodeContext.Provider value={codeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CodeContext.Provider>
);

// CodeContextをどこでも使えるようにする
export default CodeContext;