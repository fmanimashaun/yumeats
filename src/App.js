import React from 'react';
import TopNav from 'Components/TopNav';
import Featured from 'Components/Featured';
import QuickDelivery from 'Components/QuickDelivery';
import TopPicks from 'Components/TopPicks';
import Menu from 'Components/Menu';

function App() {
  return (
    <>
      <header className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
        <TopNav />
      </header>
      <main>
        <Featured />
        <QuickDelivery />
        <TopPicks />
        <Menu />
      </main>
      
    </>
  );
}

export default App;
