import './App.css';
import Button from './components/Button';

function handleButtonOne() {
  console.log('Clicou no botão 1!');
}

function handleButtonTwo() {
  console.log('Clicou no botão 2!');
}

function handleButtonThree() {
  console.log('Clicou no botão 3!');
}

function App() {
  return (
  <>
    <Button name='Botão 1' message={handleButtonOne}/>
    <Button name='Botão 2' message={handleButtonTwo}/>
    <Button name='Botão 3' message={handleButtonThree}/>
  </>);
}

export default App;
