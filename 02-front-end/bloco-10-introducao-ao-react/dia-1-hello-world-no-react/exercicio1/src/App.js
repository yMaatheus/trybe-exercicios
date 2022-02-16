import './App.css';

const array = ['Fazer Projeto', 'Lavar louça', 'Estudar Jest'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (<ol>{array.map((item) => Task(item))}</ol>);
}

export default App;
