import './App.css';
import {useState} from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result,setResult] = useState("");
  const ops = ['/', '*', '+', "-", "."];

  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) 
    {return;}

    setCalc(calc + value);

    if (!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

  const calculate = () => {setCalc (eval(calc).toString());}
  const resetResult = () => {setResult(''); setCalc('');}
  const deleteFn = () => {
    if (calc === '') {
      return;
    }
    setCalc(calc.slice(0,-1));
    setResult(result.slice(0,-1));
  }

  return (
    <div className="App">
      <div className = "calculator">
        <div className = "display">
            {result ? <span>({result})</span> : '' } {calc  || "0"} 
        </div>
        <div className = "keypad">
             <button id = "reset" onClick={resetResult}>RESET</button>
             <button id = "divide" onClick={() => updateCalc('/')}>/</button>
             <button id = "multiply" onClick={() => updateCalc('*')}>*</button>
             <button id = "del" onClick={deleteFn}>DEL</button>
             <button onClick={() => updateCalc('7')}>7</button>
             <button onClick={() => updateCalc('8')}>8</button>
             <button onClick={() => updateCalc('9')}>9</button>
             <button id = "minus" onClick={() => updateCalc('-')}>-</button>
             <button onClick={() => updateCalc('4')}>4</button>
             <button onClick={() => updateCalc('5')}>5</button>
             <button onClick={() => updateCalc('6')}>6</button>
             <button id = "plus" onClick={() => updateCalc('+')}>+</button>
             <button onClick={() => updateCalc('1')}>1</button>
             <button onClick={() => updateCalc('2')}>2</button>
             <button onClick={() => updateCalc('3')}>3</button>
             <button id = "enter" onClick={calculate}>=</button>
             <button id = "dot" onClick={() => updateCalc('.')}>.</button>
             <button id = "zero" onClick={() => updateCalc('0')}>0</button>
        </div>
      </div>
    </div>
  );
}

export default App;
