import React from 'react';

import './App.css';
import Sample from './component/Sample';
import SampleForm from './component/SampleForm';
import { sampleFunction } from './utils/sampleFunction';


function App() {
  // ↓関数にカーソルを合わせると引数の型、戻り値の型が表示される。
  // ctrl(command) + 左クリックで関数の定義してある場所まで飛べる
  sampleFunction(1, 2);

  return (
    <>
      <h1>React + Typescriptで開発するメリット</h1>
      <div className="flex">
        {/* ↓必要なプロップスが渡されていない、または
        プロップスに渡された値の型が間違っていると警告が出る 
        引数「boolean」はオプショナル（必須項目ではない）に設定したので、定義しなくてもエラーは出ない
        */}
        <Sample 
          number={1}
          string={'サンプル'}
        />
        <SampleForm />
      </div>
    </>
  );
}

export default App;
