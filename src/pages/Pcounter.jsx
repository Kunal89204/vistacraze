import React, { useEffect, useState } from 'react';
import { FaProjectDiagram } from "react-icons/fa";
const Counter = ({ initialNumber, dataNumber, text }) => {
  const [count, setCount] = useState(initialNumber);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === dataNumber) {
          clearInterval(intervalId);
        }
        return newCount;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, [dataNumber]);

  return (
    <div className="item">
      <h1 className="count" data-number={dataNumber}>
        {count}
      </h1>
      <h3 className="text">{text}</h3>
    </div>
  );
};

const CounterContainer = () => {
  return (
    <div id="counter">
        <div >
        <FaProjectDiagram className='text-lg'/>
        <Counter initialNumber={0} dataNumber={1} text="Reward" />
        
        </div>
      <Counter initialNumber={0} dataNumber={15} text="year+ Experience" />
      <Counter initialNumber={0} dataNumber={20} text="Projects Completed" />
      <Counter initialNumber={0} dataNumber={18} text="Happy Clients" />
    </div>
  );
};

export default CounterContainer;
