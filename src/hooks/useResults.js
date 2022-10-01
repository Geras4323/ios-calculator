import React from 'react';

function useResults() {
  const [firstValue, setFirstValue] = React.useState('0')
  const [hasFirstValue, setHasFirstValue] = React.useState(false)
  const [secondValue, setSecondValue] = React.useState('')
  const [hasSecondValue, setHasSecondValue] = React.useState(false)
  const [operation, setOperation] = React.useState('')
  const [finalResult, setFinalResult] = React.useState('')  // used for result printing
  const [isDone, setIsDone] = React.useState(true)        // allows or blocks replacement of result after calculus

  const [textResult, setTextResult] = React.useState('')  // used for history items

  React.useEffect(() => {
    const primerValor = firstValue;
    const operacion = operation;
    const segundoValor = secondValue;
    const valorTotal = primerValor + operacion + segundoValor;
    setFinalResult(valorTotal)
    const valorATexto = primerValor + " " + operacion + " " + segundoValor;
    setTextResult(valorATexto)
  }, [firstValue, secondValue, operation])

  return {
    firstValue,
    setFirstValue,
    hasFirstValue,
    setHasFirstValue,
    secondValue,
    setSecondValue,
    hasSecondValue,
    setHasSecondValue,
    operation,
    setOperation,
    finalResult,
    setFinalResult,
    isDone,
    setIsDone,
    textResult
  }
}

export { useResults };