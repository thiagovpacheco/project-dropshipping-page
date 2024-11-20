import React from 'react';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { useNavigation } from './hooks/useNavigation';

function App() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <Shop />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App;