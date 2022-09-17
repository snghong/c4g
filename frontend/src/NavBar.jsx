import React, { Component } from "react";
import './index.css'
import jream from './assets/img/jream.png'


export default class NavBar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">  <a className="navbar-brand" href="/courses">Learn to Jream</a>
</span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">

        <a className="nav-link" href="/courses" >      
            <img src = {jream} alt="Jream Logo" />
        </a> <span className="sr-only"></span>
      </li>

    </ul>
  </div>
</nav>
      </div>
    );
  }
}