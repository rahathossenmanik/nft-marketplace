import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Screener from './pages/Screener';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [showScreener, setShowScreener] = useState(false);

  return (
    <>
      <Header showScreener={showScreener} setShowScreener={setShowScreener} />
      {showScreener ? <Screener /> : <Dashboard />}
      <Footer />
    </>
  );
};

export default App;
