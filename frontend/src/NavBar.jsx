import React, { Component } from "react";
import './index.css'


export default class NavBar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">  <a class="navbar-brand" href="Courses.jsx">Learn to Jream</a>
</span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Potentially Mentoring ?? <span class="sr-only">(current)</span></a>
      </li>

    </ul>
  </div>
</nav>
      </div>
    );
  }
}