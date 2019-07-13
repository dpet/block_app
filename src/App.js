import React from 'react';
import './App.css';

import Bulma from 'bulma';
import NavComponent from "./components/NavComponent.js";


function App() {
  return (
    <div>
      <NavComponent></NavComponent>

      <section class="section">
        <div class="container">

            <h1 class="title">
              Bulma working
            </h1>
            <p class="subtitle">
              looks nice
            </p>
        
        </div>
      </section>

    </div>
  );
}

export default App;
