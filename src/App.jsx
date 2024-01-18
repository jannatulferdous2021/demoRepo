import React, { useState } from 'react';

const App = () => {
  const [pd ,setPd] = useState([])
  fetch("../public/fakeData/Data.json")
  .then(res => res.json())
  .then(data => setPd(data))
  return (
    <div>
      {
        pd.map(pd => <h1>{pd.name}</h1>)
      }
    </div>
  );
};

export default App;