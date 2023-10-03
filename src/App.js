import logo from './logo.svg';
import './App.css';
import Micomponente from './Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Micomponente/>
      </header>
    </div>
  );
}

export default App;
