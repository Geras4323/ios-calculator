import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';

function Number({value}) {
  const {
    firstValue,
    setFirstValue,
    hasFirstValue,
    secondValue,
    setSecondValue,
    isDone,
    setIsDone
  } = React.useContext(ResultsContext);


  function addNumber(number) {
    let primerValor;
    let segundoValor;
    let hecho = isDone  // easier debugging

    // debugger;
    if (!hasFirstValue) {
      primerValor = firstValue;

      if (primerValor === '0' && number !== '.' || hecho) {
        primerValor = number;
        setIsDone(false)
      } else {
        primerValor += number;
      }
      setFirstValue(primerValor); // string
      //////////////////
    } else {
      segundoValor = secondValue;
      segundoValor += number;
      setSecondValue(segundoValor)
    }
  }


  return (
    <button
      className='w-18 h-18 rounded-full text-white bg-number'
      onClick={() => addNumber(value)}
    >
    {value}
    </button>
  );
}

export default Number;