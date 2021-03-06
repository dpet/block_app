
import React, { Component } from 'react';

class NavComponent extends Component {

  constructor(props) {
      super(props);

      this.state = {
        searchText: '',
      };

      this.searchBoxChange = this.searchBoxChange.bind(this)
      this.searchBoxKeypress = this.searchBoxKeypress.bind(this)
      this.searchSubmitPressed = this.searchSubmitPressed.bind(this)
   }

  render(){
    return(
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <span className="is-size-2">Blocko</span>
              </a>

              <a href="#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start"></div>

              <div className="navbar-end">
                <div className="navbar-item">

                  <div className="field is-grouped">
                    <p className="control">
                      <button
                        className="button is-light"
                        onClick={this.searchSubmitPressed}>
                          Search
                      </button>
                    </p>
                    <div className="control">
                      <input 
                        className="input" 
                        type="text" 
                        placeholder="Block height" 
                        onChange={this.searchBoxChange} 
                        onKeyDown={this.searchBoxKeypress} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </nav>
    )
  }

  searchBoxKeypress(e){
    if(e.keyCode == 13){
      this.props.searchSubmitted(this.state.searchText)
    }
  }

  searchBoxChange(e){
    this.setState({searchText: e.target.value})
  }

  searchSubmitPressed(){
    this.props.searchSubmitted(this.state.searchText)
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