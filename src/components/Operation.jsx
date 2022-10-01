import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';

function Operation({value}) {
  const {
    firstValue,
    setOperation,
    setHasFirstValue,
  } = React.useContext(ResultsContext)

  function addOperation(operation) {
    if (firstValue !== '.') {   // doesn't allow to add operation if firstValue == '.'
      setHasFirstValue(true)
      setOperation(operation)
    }
  }

  return (
    <button
      className='w-18 h-18 rounded-full text-white bg-operation'
      onClick={() => addOperation(value)}
    >
    {value}
    </button>
  );
}

export default Operation;