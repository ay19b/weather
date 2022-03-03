import './App.css';
import Background from './components/Background';
import LeftInfo from './components/LeftInfo.js';
import Sidebar from './components/sideBar/Sidebar';

// Add photos to github
// fixed live clock, added dynamic backgrounds, added dynamic weather icons

function App() {
  return (
    <>
      <section className='container'>
        <Background />
        <LeftInfo />
        <Sidebar />
      </section>
    </>
  );
}

export default App;
