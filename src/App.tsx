import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

// 関数宣言。
function Button1({ children }: ButtonProps) {
  return <button>{children}</button>;
}

// アロー関数 + 引数リストに型注釈。
const Button2 = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

// アロー関数 + 変数宣言に型注釈。
// 返り値の型が `JSX.Element | null` に制限されるという点で、
// `0` などを返される心配がなくて安全。
const Button3: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default function App() {
  return (
    <div>
      {/*
       * `Button1` や `Button2` を Meta+Click (Mac なら Command+Click) して、
       * コードジャンプ先を確認してみてください。
       **/}
      <Button1>Click me!</Button1>
      <Button2>Click me!</Button2>
      <Button3>Click me!</Button3>
    </div>
  );
}
