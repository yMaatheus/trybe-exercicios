import React from 'react';
import './App.css';
import Button from './components/Button';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    console.log('Clicou no botão 1!');
  }

  handleButtonTwo() {
    console.log('Clicou no botão 2!');
  }

  handleButtonThree() {
    console.log('Clicou no botão 3!');
  }

  render() {
    return (
      <>
        <Button name='Botão 1' message={this.handleButtonOne} />
        <Button name='Botão 2' message={this.handleButtonTwo} />
        <Button name='Botão 3' message={this.handleButtonThree} />
      </>);
  }
}

export default App;
