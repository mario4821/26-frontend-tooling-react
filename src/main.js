import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

import './style/main.scss';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
        </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  
            this.state = {
              content: cowsay.say({
              text: faker.lorem.words(10),
              e: "oO",
              T: "U ",
    }),
  };
  this.handleCowsayClick = this.handleCowsayClick.bind(this);
  }
handleCowsayClick() {
  this.setState(() => {
    return {
      content: cowsay.say({
        text: faker.lorem.words(10),
        e: "oO",
        T: "U",
    }),
  };
});
}
 
  render() {
    return (
      <div>
        <HeaderComponent/>
        <h2> Generate Cowsay Lorem </h2>
          <pre>
{ this.state.content }
          </pre>
          <button onClick={ this.handleCowsayClick }> click me </button>
          </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);