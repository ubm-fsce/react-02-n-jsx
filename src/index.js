// import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// create react-componenet
const App = () => {
  const buttonText = 'Click me ...';
  return (
    <div>
      <label className='label' htmlFor='name'>
        {' '}
        Enter Name ::{' '}
      </label>
      <input type='text' id='name' />
      <button style={{ backgroundColor: 'green', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};
//Take react component and show on screen
ReactDOM.render(<App />, document.querySelector('#root'));
