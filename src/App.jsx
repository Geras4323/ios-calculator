import React from 'react';

import { HistoryContext } from './contexts/HistoryContext.js';
import { useHistory } from './hooks/useHistory';

import AppUI from './AppUI';


function App() {
  const history = useHistory();

  return (
    <HistoryContext.Provider value={history}>
      <AppUI />
    </HistoryContext.Provider>
  )
}

export default App

