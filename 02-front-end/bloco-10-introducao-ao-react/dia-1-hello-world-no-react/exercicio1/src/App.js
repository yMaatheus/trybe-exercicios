import './App.css';

const array = ['Pão', 'Açúcar', 'Nutella'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (<ol>{array.map((item) => Task(item))}</ol>);
}

export default App;
