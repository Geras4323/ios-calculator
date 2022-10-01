import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';

function Result() {
  const { finalResult } = React.useContext(ResultsContext)

  return(
    <div className='w-full h-auto mb-10 font-semibold text-white text-7xl flex items-center justify-end'>
    {finalResult}
    {/* {finalResult.length <= 8
      ? finalResult
      : (Number(finalResult)).toFixed(2)
    } */}
    </div>
  );
}

export default Result;