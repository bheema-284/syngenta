import '../App.css';
  import { useState } from 'react';
  export const Circles = () => {
    const [value, setValue] = useState('');
    const [visible, toggleVisible] = useState([]);
    const circles = [
      { id: 1, color: 'rgb(94, 197, 94)' },
      { id: 2, color: 'rgb(236, 236, 102)' },
      { id: 3, color: 'rgb(107, 107, 229)' },
      { id: 4, color: 'rgb(162, 241, 241)' },
      { id: 5, color: 'rgb(244, 192, 244)' },
    ];
    return (
      <div>
        <input
          type="number"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if ([1, 2, 3, 4, 5].includes(+value)) {
              toggleVisible([...visible, Number(value)]);
            }
          }}>
          Shoot
        </button>
        <div className="box">
          <h3>Empty Div</h3>
          {circles.map((e) =>
            visible.includes(e.id) ? (
              <div
                onClick={(el) => {
                  const filter = visible.filter((el) => el !== e.id);
                  console.log(filter);
                  toggleVisible(filter);
                }}
                style={{ background: e.color }}
                className="balls">
                {e.id}
              </div>
            ) : null,
          )}
        </div>
        <div className="box">
          <h3>5 Circles</h3>
          {circles.map((e) =>
            !visible.includes(e.id) ? (
              <div style={{ background: e.color }} className="balls">
                {e.id}
              </div>
            ) : null,
          )}
        </div>
      </div>
    );
  };