import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';

function Number({value, ancho, space}) {  // receives styling data
  const {
    firstValue,
    setFirstValue,
    hasFirstValue,
    secondValue,
    setSecondValue,
    isDone,
    setIsDone,
    allowDecimal,
    setAllowDecimal
  } = React.useContext(ResultsContext);


  function addNumber(number) {
    let primerValor;
    let segundoValor;
    let hecho = isDone  // easier debugging


    if (!hasFirstValue) {
      primerValor = firstValue;

      if (primerValor === '0' && number !== '.' || hecho) {
        primerValor = number;
        setIsDone(false)
      } else {
        if (primerValor.includes('.') && number === '.') {
        } else {
          primerValor += number;
        }
      }
      setFirstValue(primerValor); // sends string
    } else {
      segundoValor = secondValue;
      if (segundoValor.includes('.') && number === '.') {
      } else {
        segundoValor += number;
      }
      setSecondValue(segundoValor)
    }
  }


  return (
    <button
      className={`${ancho} h-18 rounded-full text-white bg-number ${space}`}  // uses received styling data
      onClick={() => addNumber(value)}
    >
    {value}
    </button>
  );
}

export default Number;