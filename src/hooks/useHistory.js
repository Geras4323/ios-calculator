import React from 'react';

function useHistory() {
  const [isHistoryShown, setIsHistoryShown] = React.useState(false)
  const [history, setHistory] = React.useState([])
  const [bringData, setBringData] = React.useState(true)

  React.useEffect(() => {
    if (bringData) {
      const localStorageData = localStorage.getItem('RESULTS');
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        setHistory(parsedData)
      } else {
        localStorage.setItem('RESULTS', JSON.stringify([]))
      }
      setBringData(false)
    } else {
      localStorage.setItem('RESULTS', JSON.stringify(history))
    }
  }, [history])


  return {
    isHistoryShown,
    setIsHistoryShown,
    history,
    setHistory,
  }
}

export { useHistory };