import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';

function Utility({value}) {
  const {
    firstValue,
    hasFirstValue,
    setFirstValue,
    secondValue,
    setSecondValue,
    setSign,
    setHasFirstValue,
  } = React.useContext(ResultsContext)

  function applyUtil(utility) {
    if (firstValue !== '.') {
      switch (utility) {
        case 'AC':
          setFirstValue('0');
          setSecondValue('');
          setSign('');
          setHasFirstValue(false);
          break;
        case '%':
          if (!hasFirstValue) {
            let primerValor = Number(firstValue);
            primerValor /= 100;
            setFirstValue(primerValor.toString())
          } else {
            let segundoValor = Number(secondValue);
            segundoValor /= 100;
            setSecondValue(segundoValor.toString())
          }
          break;
        case '+/-':
          let primerValorInvertido = -Number(firstValue)
          setFirstValue(primerValorInvertido.toString())
      }
    }
  }

  return (
    <button
      className='w-18 h-18 rounded-full text-black bg-utility'
      onClick={() => applyUtil(value)}
    >
    {value}
    </button>
  );
}

export default Utility;