import React from 'react';

import { ResultsContext } from '../contexts/ResultsContext';

function Result() {
  const { finalResult } = React.useContext(ResultsContext)

  return(
    <div className='w-full h-auto mb-8 font-semibold text-white text-7xl flex items-center justify-end'>
    {/* {console.log(finalResult)} */}
    {finalResult}
    </div>
  );
}

export default Result;