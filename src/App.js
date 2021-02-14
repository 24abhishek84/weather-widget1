import './App.css';
import WeatherWidget from './Components/WeatherWidget/WeatherWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: '#ffffff'}}>Weather Widget</h1>
      </header>
      <WeatherWidget />
    </div>
  );
}

export default App;
