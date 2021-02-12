import { FC, useState } from 'react';
import './App.scss';

function convert(list: string): string {
  console.log(list.split('\n'));
  return list
    .split('\n').map(s => s.startsWith('- ') ? s.slice(2) : s)
    .sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join('\n');
}

const App: FC = () => {
  const [inp, setInp] = useState('');
  const [outp, setOutp] = useState('');

  const conv = () => {
    setOutp(convert(inp));
  };

  return (
    <div className="App">
      <div className="inoutput">
        <div>
          <label>Input</label>
          <textarea className="input" value={inp} onChange={e => setInp(e.currentTarget.value)} />
        </div>
        <div>
          <label>Output</label>
          <textarea className="output" value={outp} readOnly onClick={e => e.currentTarget.select()} />
        </div>
      </div>
      <button onClick={conv}>Convert</button>
    </div>
  );
}

export default App;
