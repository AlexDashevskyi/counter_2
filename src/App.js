import React, {useState} from "react";
import './App.css'
import Counter from "./Counter";


export default function App() {

  const [counters, setCounters] = useState(1)

  const add = () => {
    setCounters(counters + 1)

  };

  return (
      <div className={'App'}>

        <header>COUNTER-2</header>

        {[...Array(counters).keys()].map((newCounter) => <Counter key={newCounter}/>)}

        <div>
          <button className={'btn'} onClick={add}>Add Counter</button>
        </div>
      </div>
  );
}