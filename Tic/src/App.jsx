import { useState } from 'react';
import TicTac from './Components/TicTac.jsx'; // ✅ no space in filename
import './App.css';

function App() {
  const [Count, Setcount] = useState(0); // ✅ follow JS naming conventions (camelCase)

  return (
    <>
      <h1 className='text-warning text-center mt-5'>Tic Tac Toe</h1>
      <TicTac /> {/* ✅ shorthand self-closing tag */}
    </>
  );
}

export default App;

