import React, { useState, useEffect } from 'react';
import './ProgressBar-style.css';

export default function ProgressBar() {
  const [active, setActive] = useState(1);
  const [prevFlag, setPrevFlag] = useState(true);
  const [nextFlag, setNextFlag] = useState(false);
  const [width, setWidth] = useState('20px');
  const number = 4;

  const next = () => {
    setActive(active + 1);
    setWidth(`${parseInt(width) + 100}px`);
  };
  const Prev = () => {
    setActive(active - 1);
    setWidth(`${parseInt(width) - 100}px`);
  };

  useEffect(() => {
    if (active === number) {
      setActive(number);
    } else if (active < 1) {
      setActive(1);
    }
    update();
  }, [active]);

  const update = () => {
    // setWidth((prev) => {
    //   return `${parseInt(prev) + 100}px`;
    // });

    if (active > 1) {
      setPrevFlag(false);
    } else setPrevFlag(true);
    if (active === 4) {
      setNextFlag(true);
    } else setNextFlag(false);
  };
  console.log(width);
  const circles = (length) => {
    let noOfCircles = [];
    for (let i = 1; i <= length; i++) {
      noOfCircles.push(i);
    }
    return noOfCircles.map((circle, index) => {
      return (
        <div
          key={index}
          className={index + 1 <= active ? 'circle active' : 'circle'}
        >
          {circle}
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <div className="progress-container">
          <div className="progress" style={{ width: `${width}` }}></div>
          {circles(number)}
        </div>

        <button className="btn" id="prev" disabled={prevFlag} onClick={Prev}>
          Prev
        </button>
        <button className="btn" id="next" disabled={nextFlag} onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
