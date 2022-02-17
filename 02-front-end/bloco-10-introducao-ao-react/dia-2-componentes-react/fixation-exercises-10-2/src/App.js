import logo from './logo.svg';
import './App.css';
import Image from './components/Image'

function App() {
  // return (<Image alternativeText='Cute cat staring' />);
  return (<Image source={logo} alternativeText='Cute cat staring' />);
}

export default App;
