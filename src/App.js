import './App.css';
import Background from './components/Background';
import Sidebar from './components/sidebar/sidebar';
import LeftInfo from './components/info/LeftInfo.js';
// Add photos to github
// fixed live clock, added dynamic backgrounds, added dynamic weather icons

function App() {
  return (
    <>
      <section className='home'>
        
        <LeftInfo />
        <Sidebar />
        <Background />
      </section>
    </>
  );
}

export default App;
