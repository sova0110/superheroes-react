import logo from './logo.svg';
import './App.css';
import HeroList from './components/hero-card'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroList/>
      <Footer/>
    </div>
  );
}

export default App;
