import React from 'react';
import ReactDom from 'react-dom';

import '../style/main.scss';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <h1>401d23 Hello World</h1>
        </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: 'This is a message to be displayed'
      secretState: 'I will never be displayed',
    };
    this.handleCounterIncrement = this.handleCounterIncrement.bind(this);
    this.handleCounterDecrement = this.handleCounterDecrement.bind(this);
    this.setCounter = this.setCounter.bind(this);
  }

  handleCounterIncrement() {
    this.setState((previousState) => {
      return {
        counter: previousState.counter +1,
      };
    });
  }

  handleCounterDecrement() {
    this.setState((previousState) => {
      return {
        counter: previousState.counter -1,
      };
    });
  }

  setCounter(e) {
    const { value } = e.target;
    this.setState(() => {
      return {
        counter: value,
      };
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <h2> Hey! I am an H2 </h2>
        <p> Hey! This is a random Number { Math.random() } </p>
        <ul>
          {
            ['Apple', 'Orange', 'Banana'].map(content => <li key={ content}> { content }</li>)
          }
          </ul>
          <p> The value of my counter is { this.state.counter }</p>
          <button onClick={ this.handleCounterIncrement}> Increment Counter! </button>
          <button onClick={ this.handleCounterDecrement}> Decrement Counter! </button>
          <input type='number' onChange={this.setCounter} value = {this.state.counter}/>
          </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);