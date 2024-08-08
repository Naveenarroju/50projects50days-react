import React, { useRef, useEffect, useState } from 'react';
import './BlurEffect.css';

export default function BlurEffect() {
  const loadText = useRef();
  const bg = useRef();

  useEffect(() => {
    var load = 0;
    let int = setInterval(blurring, 30);

    function blurring() {
      load++;

      if (load > 99) {
        console.log('int');
        clearTimeout(int);
      }

      loadText.current.innerText = `${load}%`;
      loadText.current.style.color = scale(load, 0, 100, 1, 0);
      bg.current.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    }

    const scale = (num, in_min, in_max, out_min, out_max) => {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    };
  }, []);

  return (
    <div>
      <section ref={bg} className="bg"></section>
      <div ref={loadText} className="loading-text">
        0%
      </div>
    </div>
  );
}
