import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';

function Utility({value}) {
  const {
    firstValue,
    hasFirstValue,
    setFirstValue,
    secondValue,
    setSecondValue,
    setOperation,
    setHasFirstValue,
    setIsDone
  } = React.useContext(ResultsContext)

  function applyUtil(utility) {
    switch (utility) {
      case 'AC':              // restarts everything
        setFirstValue('0');
        setSecondValue('');
        setOperation('');
        setHasFirstValue(false);
        setIsDone(false);
        break;
      case '%':
        if (firstValue !== '.') {
          if (!hasFirstValue) {   // adds to firstValue
            let primerValor = Number(firstValue);
            primerValor /= 100;
            setFirstValue(primerValor.toString())
          } else {                // adds to secondValue
            let segundoValor = Number(secondValue);
            segundoValor /= 100;
            setSecondValue(segundoValor.toString())
          }
        }
        break;
      case '+/-':   // inverts sign (+ -> -)
        if (firstValue !== '.') {
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