import './App.css';
import Button, { ButtonOne } from './components/Button/Button';

function App() {
  console.log("Works")
  return (
    <div className="App">
      <h1>
        React One
      </h1>
      <Button/>
      <ButtonOne/>
    </div>
  );
}

export default App;
