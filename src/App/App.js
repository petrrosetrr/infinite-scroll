import React from 'react';
import s from './App.module.css';
import ScrollComponent from '../ScrollComponent/ScrollComponent'

function App() {
  return (
    <div className={s.app}>
      <header className={s.header}>
          <div className={`container ${s.container}`}>
            <h1 onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }}>Infinite scroll demo</h1>
          </div>
      </header>
        <ScrollComponent />
    </div>
  );
}

export default App;
