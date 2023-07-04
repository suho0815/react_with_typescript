import ReactDOM from 'react-dom/client';
import * as D from './data'

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} alt="" />
  </div>
))
const rootVurtualDOM = <ul>{children}</ul>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(rootVurtualDOM);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals