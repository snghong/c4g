import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
export default class SideBar extends Component {
  render() {
    return (<>
        <ul className="sidebar">
            <li><Button variant="light" href="/Courses">
            <i class="bi bi-compass"></i>
            </Button> </li>
            <li><Button variant="light" href="/Profile">
            <i class="bi bi-file-person"></i>
            </Button> </li>
            <li><Button variant="light" href="/Social"><i class="bi bi-people"></i></Button> </li>
            <li><Button variant="light" href="/Events"><i class="bi bi-calendar2"></i></Button></li>
            
            
        </ul>
  </>);
  
  }
}