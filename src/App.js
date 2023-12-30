
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGr from './components/ButtonGr';
import DataGridDemo from './components/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataGridDemo />
        <ButtonGr />
      </header>
    </div>
  );
}

export default App;
