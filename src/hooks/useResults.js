import React from 'react';

function useResults() {
  const [firstValue, setFirstValue] = React.useState('0')
  const [hasFirstValue, setHasFirstValue] = React.useState(false)
  const [secondValue, setSecondValue] = React.useState('')
  const [hasSecondValue, setHasSecondValue] = React.useState(false)
  const [sign, setSign] = React.useState('')
  const [finalResult, setFinalResult] = React.useState('')

  React.useEffect(() => {
    const primerValor = firstValue;
    const signo = sign;
    const segundoValor = secondValue;
    const valorTotal = primerValor + signo + segundoValor;
    setFinalResult(valorTotal)
  }, [firstValue, secondValue, sign])

  return {
    firstValue,
    setFirstValue,
    hasFirstValue,
    setHasFirstValue,
    secondValue,
    setSecondValue,
    hasSecondValue,
    setHasSecondValue,
    sign,
    setSign,
    finalResult,
    setFinalResult
  }
}

export { useResults };