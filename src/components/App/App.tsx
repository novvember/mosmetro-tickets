import React from 'react';
import Figure from '../Figure/Figure';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../Text/Text';
import './App.css';

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <Figure />
        <Text />
      </main>
      <Footer />
    </div>
  );
}

export default App;
