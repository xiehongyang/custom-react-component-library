import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="customer">Hello</Button>
        <Button disabled>Disabled Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Baidu Link</Button>
        <Button btnType={ButtonType.Link} disabled href="http://www.baidu.com">Disabled Link</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
