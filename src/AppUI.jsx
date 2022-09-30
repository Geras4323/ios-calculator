import React from 'react';

import { ResultsContext } from './contexts/ResultsContext';
import { useResults } from './hooks/useResults';

import Buttons from './components/Buttons';
import Result from './components/Result';


function AppUI() {
  const results = useResults();

  return (
    <ResultsContext.Provider value={results}>
      <div className="w-screen h-screen flex justify-center">
        <div className='h-full flex flex-col justify-end p-4 bg-black rounded-2xl max-w-sm   ssm:border-r ssm:border-r-border ssm:border-l ssm:border-l-border'>
          <Result />
          <Buttons />
        </div>
      </div>
    </ResultsContext.Provider>
  );
}

export default AppUI;