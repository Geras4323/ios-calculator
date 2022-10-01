import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';
import { HistoryContext } from '../contexts/HistoryContext.js';


function Caculate() {
  const {
    firstValue,
    setHasFirstValue,
    secondValue,
    sign,
    setFirstValue,
    setSecondValue,
    setSign,
    setIsDone,
    textResult
  } = React.useContext(ResultsContext);

  const {
    history,
    setHistory,
  } = React.useContext(HistoryContext);

  function Calcular() {
    let primerValor = Number(firstValue)
    let segundoValor = Number(secondValue)
    let calculo;

    switch (sign) {
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
    setHasFirstValue(false);
    setFirstValue(calculo.toString())
    setSecondValue('')
    setSign('')

    setHistory([...history, {operation: textResult, result: calculo.toString()}])
    setIsDone(true)
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