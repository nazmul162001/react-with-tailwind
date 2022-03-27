import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className='text-6xl'>Wellcome to my Pricing Club</h1>
      <Pricing />
    </div>
  );
}

export default App;
