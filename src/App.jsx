import React, { useState } from "react"


function App() {
  let [calculation, setCalculation] = useState('');

  function updateCalculation(value) {
    setCalculation(calculation += value);
  }
  function result(){
    setCalculation(eval(calculation));
  }

  return (
    <div className="main">
      <div className="container">
        <div className="result">
          <div>
            {calculation}
          </div>
        </div>
        <div className="buttons">
          <div>
            <button onClick={() => updateCalculation('1')}>1</button>
            <button onClick={() => updateCalculation('2')}>2</button>
            <button onClick={() => updateCalculation('3')}>3</button>
            <button className="operator-button" onClick={() => updateCalculation(' + ')}>+</button>
          </div>
          <div>
            <button onClick={() => updateCalculation('4')}>4</button>
            <button onClick={() => updateCalculation('5')}>5</button>
            <button onClick={() => updateCalculation('6')}>6</button>
            <button className="operator-button" onClick={() => updateCalculation(' - ')}>-</button>
          </div>
          <div>
            <button onClick={() => updateCalculation('7')}>7</button>
            <button onClick={() => updateCalculation('8')}>8</button>
            <button onClick={() => updateCalculation('9')}>9</button>
            <button className="operator-button" onClick={() => updateCalculation(' * ')}>*</button>
          </div>
          <div>
            <button onClick={() => updateCalculation('.')}>.</button>
            <button onClick={() => updateCalculation('0')}>0</button>
            <button onClick={result}>=</button>
            <button className="operator-button" onClick={() => updateCalculation(' / ')}>/</button>
          </div>
          <div >
            <button className="clear-button" onClick={() => setCalculation('')}>Clear</button>
            <button onClick={() => setCalculation(calculation*calculation)}>^2</button>
            <button onClick={() => setCalculation(calculation*calculation*calculation)}>^3</button>
            <button className="operator-button" onClick={() => updateCalculation(' % ')}>%</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
