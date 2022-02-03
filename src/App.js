import './App.css';
import React,{ useState} from 'react';
import Board from './components/Board';
function App() {
  const [count,setCount] = useState(0);
  const [best,setBest] = useState(0);
  function increaseScore(){
    setCount(count+1);
    if(count+1>best){
      setBest(count+1);
    }
  }
  
  function initializeScore(){
    setCount(0);
  }
  return (
      <header className="App-header">
        <div>
          <h1 className='heading'>Memory Game</h1>
          <ul className='scores'>
            <li>Your Score: {count}</li>
            <li>Best Score: {best}</li>
          </ul>
        </div>
        <Board increaseScore = {()=>increaseScore()} initializeScore = {()=> initializeScore()}/>
      </header>
  );
}

export default App;
