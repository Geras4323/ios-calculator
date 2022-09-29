import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';

function Caculate() {
  const {
    firstValue,
    setHasFirstValue,
    secondValue,
    sign,
    setFirstValue,
    setSecondValue,
    setSign,
  } = React.useContext(ResultsContext)

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
    // debugger;
    if (calculo === 0) {
      setHasFirstValue(false);
    }
    setFirstValue(calculo.toString())
    setSecondValue('')
    setSign('')
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