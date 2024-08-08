import React, { useState } from 'react';
import './HiddingSearch.css';
import { FcSearch } from 'react-icons/fc';

export default function HiddingSearch() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={show ? 'search active' : 'search'}>
        <input type="text" placeholder="Search..." className="input"></input>
        <button
          className="btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          <FcSearch />
        </button>
      </div>
    </>
  );
}
