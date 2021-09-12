import './App.css'
import Navbar from './component/navbar/navbar'
import Hero from './component/hero/hero'
import Prod from './component/prod/prod'
import Footer from './component/footer/footer'
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Prod />
      <Footer />
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
