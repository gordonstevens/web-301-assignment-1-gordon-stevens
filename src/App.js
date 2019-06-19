import React, { useState } from 'react';

import Button from './components/Button/Button.js';
import Card from './components/Card/Card.js';
import Input from './components/Input/Input.js';
import Select from './components/Select/Select.js';
import Textarea from './components/Textarea/Textarea.js';

import './App.css';

function App() {

  const [showButtonMessage, setShowButtonMessage] = useState(false);

  return (
    <div className="App">
      <div className="App-containment">
        <div className="assignmentInstructions">
          WEB301 Assignment 1 - Creating Components<br />
          Worth: 25%<br />
          Due: June 18, 2019<br />
          <br />
          Preamble<br />
          <br />
          One of the most important fundamentals to master in React is the creation of components. For
          this assignment you will use create-react-app to design a component library that you will use
          throughout the course. This project will live in your Github account and you will continually make
          improvements on it throughout the course.<br />
          <br />
          Requirements<br />
          <br />
          You will create the following components with the minimum required props:<br />
          <ul>
            <li>Button (onClick)</li>
            <li>Card</li>
            <li>Input (onChange)</li>
            <li>Select (onChange)</li>            
            <li>Textarea (onChange)</li>            
          </ul>

          <br />

          All of these components will be created as function components and will have customized CSS
          written by you. Each of these components must have the following:<br />
          <ul>
            <li>Props with PropType definitions</li>
            <li>Custom CSS code</li>
            <li>Written using arrow functions</li>
            <li>Be reusable in a variety of situations</li>
            <li>Have no console errors</li>
          </ul>
        </div>

        <br />
        <br />
        <br />
        
        <Button handleClick={ () => setShowButtonMessage(!showButtonMessage) } colorTheme={ 'themeRedGold' }>
          <span>
            Press to view a message!
          </span>
        </Button>

        <br />
        <br />
        <br />
        
        {showButtonMessage && ( <div>Hello! This is a button message!</div> )}

        <br />
        <br />
        <br />

        <Card>
          <span>Test Card - Line 1.</span><br />
          <span>Test Card - Line 2.</span><br />
          <a href="https://myseneca.ca/" rel="noopener noreferrer" target="_blank">Check MySeneca E-mail</a>
        </Card>

        <br />
        <br />
        <br />

        <Input>
          Please type your favourite colour...
        </Input>
        
        <br />
        <br />
        <br />

        <Select>
          <span>Please select a pet.</span>
        </Select>

        <br />
        <br />
        <br />

        <Textarea>
          Please type the name of your favourite pokemon (Charizard) and why in the text-area
        </Textarea>

      </div>
    </div>
  );
}

export default App;
