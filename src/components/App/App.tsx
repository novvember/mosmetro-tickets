import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../Text/Text';
import './App.css';

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <section className="diagram">Diagram</section>
        <Text />
      </main>
      <Footer />
    </div>
  );
}

export default App;
