import React from 'react';
import EmailWork from './components/Page/input'
import NavWork from './components/Navbar/navbar'
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <div className="Container">
        <NavWork />
      </div>
      <div>
        <EmailWork />
      </div>
    </div>
  );
}

export default App;
