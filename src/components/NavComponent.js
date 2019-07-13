
import React, { Component } from 'react';

class NavComponent extends Component {
  render(){
    return(
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <span className="is-size-2">Blocko</span>
              </a>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="Search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    )
  }

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });
  }
}

export default NavComponent;