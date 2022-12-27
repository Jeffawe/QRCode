import React from 'react';
import EmailWork from './components/Page/input'
import NavWork from './components/Navbar/navbar'
import Footer from './components/Footer';
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
