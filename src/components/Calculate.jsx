import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';
import { HistoryContext } from '../contexts/HistoryContext.js';


function Caculate() {
  const {
    firstValue,
    setHasFirstValue,
    secondValue,
    operation,
    setFirstValue,
    setSecondValue,
    setOperation,
    setIsDone,
    textResult
  } = React.useContext(ResultsContext);

  const {
    history,
    setHistory,
  } = React.useContext(HistoryContext);

  function Calcular() {   // turns string into numbers to operate, then returns the result as a string
    let primerValor = Number(firstValue)
    let segundoValor = Number(secondValue)
    let calculo;

    switch (operation) {
      case '+':
        calculo = primerValor + segundoValor;
        break;
      case '-':
        calculo = primerValor - segundoValor;
        break;
      case 'x':
        calculo = primerValor * segundoValor;
        break;
      case '÷':
        calculo = primerValor / segundoValor;
        break;
    }
    // resets everything ->
    setHasFirstValue(false);
    setFirstValue(calculo.toString())
    setSecondValue('')
    setOperation('')

    setHistory([...history, {operation: textResult, result: calculo.toString()}]) // adds the result to the history
    setIsDone(true) // lets the app know that it can replace the result shown on screen
  }


  return (
    <button
      className='w-18 h-18 rounded-full text-white bg-operation'
      onClick={() => Calcular()}
    >
      =
    </button>
  )
}

export default Caculate;