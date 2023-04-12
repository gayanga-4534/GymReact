import './App.css';
import Hero from './components/Hero';
import Reasons from './components/Reasons/Reasons';
import Programs from './components/programs/Programs';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
    </div>
  );
}

export default App;
