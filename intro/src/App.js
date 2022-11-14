import Stars from './components/Stars'
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(5);
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Stars count={state} />
      </div>
    </div>
  );
}

export default App;