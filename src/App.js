import React, { useState } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';


const App =() => {
  const [timeframe, setTimeframe] = useState('daily');

  return (
    <div className="App">
      <TimeframeSelector onSelect={setTimeframe} />
      <Chart timeframe={timeframe} />
    </div>
  );
}

export default App;
