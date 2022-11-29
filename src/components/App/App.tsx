import React from 'react';
import Diagram from '../Diagram/Diagram';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../Text/Text';
import './App.css';

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <Diagram />
        <Text />
      </main>
      <Footer />
    </div>
  );
}

export default App;
