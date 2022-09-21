import './App.css';
import CounterView from './features/counter/CounterView';
import MulltiplicationView from './features/counter/MulltiplicationView';

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterView />
      <MulltiplicationView />
    </div>
  );
}

export default App;
