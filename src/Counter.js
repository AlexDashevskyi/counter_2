import React, {useState} from 'react';
import CountBtn from "./CountBtn";

export default function Counter() {
    const [count, setCount] = useState(0);

    const updateCounter = (n) => {
        setCount(n);
    }

    return (
        <div>
            <CountBtn value={-1} count={count} updateCounter={updateCounter}/>
            <CountBtn value={-2} count={count} updateCounter={updateCounter}/>
            <CountBtn value={-3} count={count} updateCounter={updateCounter}/>
            {count}
            <CountBtn value={+3} count={count} updateCounter={updateCounter}/>
            <CountBtn value={+2} count={count} updateCounter={updateCounter}/>
            <CountBtn value={+1} count={count} updateCounter={updateCounter}/>
        </div>
    );
}

