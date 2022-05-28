import '../App.css';
import { useState } from 'react';
export const Circles = () => {
  const [value, setValue] = useState('');
  const [visible, toggleVisible] = useState(false);

  return (
    <div className="div">
      <div className="ediv"></div>
      <div>
        5 Circles
        <div
          onClick={() => toggleVisible(!visible)}
          id="1"
          className="one"></div>
        <div
          id="2"
          onClick={() => toggleVisible(!visible)}
          className="two"></div>
        <div
          id="3"
          onClick={() => toggleVisible(!visible)}
          className="three"></div>
        <div
          id="4"
          onClick={() => toggleVisible(!visible)}
          className="four"></div>
        <div
          id="5"
          onClick={() => toggleVisible(!visible)}
          className="five"></div>
      </div>
    </div>
  );
};
