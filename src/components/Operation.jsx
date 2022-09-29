import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';

function Operation({value}) {
  const {
    setSign,
    setHasFirstValue,
  } = React.useContext(ResultsContext)

  function addSign(sign) {
    setHasFirstValue(true)
    setSign(sign)
  }

  return (
    <button
      className='w-18 h-18 rounded-full text-white bg-operation'
      onClick={() => addSign(value)}
    >
    {value}
    </button>
  );
}

export default Operation;