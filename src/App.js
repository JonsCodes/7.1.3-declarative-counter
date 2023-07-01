import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
      // new-school div = <> </>
      <>
        <h1>This is SOOOO cool! I'm learning React!</h1> 
        <h1>{counter}</h1>
        <p>{counter}</p>
        <h4>Thanks Tom and Hunter!</h4>
      </>
    )
}

export default App;
