import React from 'react';

import { ResultsContext } from './contexts/ResultsContext';
import { useResults } from './hooks/useResults';

import Buttons from './components/Buttons';
import Result from './components/Result';


function AppUI() {
  const results = useResults();

  return (
    <ResultsContext.Provider value={results}>
      <div className='w-screen h-screen flex flex-col justify-end p-4 bg-black'>
        <Result />
        <Buttons />
      </div>
    </ResultsContext.Provider>
  );
}

export default AppUI;