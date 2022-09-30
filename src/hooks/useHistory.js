import React from 'react';

function useHistory() {
  const [isHistoryShown, setIsHistoryShown] = React.useState(false)
  const [history, setHistory] = React.useState([])


  return {
    isHistoryShown,
    setIsHistoryShown,
    history,
    setHistory
  }
}

export { useHistory };