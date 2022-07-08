import React, { useState, useEffect } from 'react';
import './style.css';
import 'animate.css';

export default function App() {
  const [editOn, setEditon] = useState(false);
  function handleFocus(evt) {
    let d = document.querySelector('.' + evt.target.name);
    d.classList.add('highlight-icon');
    d.classList.add('animate__animated');
    d.classList.add('animate__bounceIn');
  }

  function handleBlur(evt) {
    let d = document.querySelector('.' + evt.target.name);
    d.classList.remove('highlight-icon');
    d.classList.remove('animate__animated');
    d.classList.remove('animate__bounceIn');
  }

  function handleClick() {
    setEditon(editOn === true ? false : true);
  }

  return (
    <div className="container">
      <div className="input-box" style={{ gridColumn: '1/2' }}>
        <div>
          <span className="material-symbols-outlined name">title</span>
        </div>
        {editOn === true ? (
          <span className="form-input"> TEST </span>
        ) : (
          <input
            name="name"
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="text"
            value="TEST"
          />
        )}
      </div>
      <div className="input-box" style={{ gridColumn: '1/2' }}>
        <div>
          <span className="material-symbols-outlined date">calendar_month</span>{' '}
        </div>
        <input
          name="date"
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="datetime-local"
        />
      </div>
      <div className="input-box date-string" style={{ gridColumn: '1/2' }}>
        <div> </div>
        {new Date().toString()}
      </div>

      <div className="input-box" style={{ gridColumn: '1/2' }}>
        <div>
          <span className="material-symbols-outlined location">pin_drop</span>{' '}
        </div>
        <input
          name="location"
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
        />
      </div>
      <div className="input-box" style={{ gridColumn: '1/2' }}>
        <div>
          <span class="material-symbols-outlined link">link</span>{' '}
        </div>
        <input
          name="link"
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
        />
      </div>
      <div className="input-box" style={{ gridColumn: '1/2' }}>
        <div>
          <span class="material-symbols-outlined addguest">person_add</span>{' '}
        </div>
        <input
          name="addguest"
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
        />
      </div>

      <div className="input-box" style={{ gridColumn: '1/2' }}>
        <div>
          <span class="material-symbols-outlined description">description</span>{' '}
        </div>
        <textarea
          name="description"
          rows={5}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
        />
      </div>
      <button onClick={handleClick}> Click </button>
    </div>
  );
}
