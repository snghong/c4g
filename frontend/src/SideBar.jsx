import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
export default class SideBar extends Component {
  render() {
    return (<>
        <ul className="sidebar align-middle">
            <li class = "btn-big" ><Button class = "btn-big"  variant="light" href="/Courses">
            <i class="bi bi-compass btn-big"></i>
            </Button> </li>
            <li><Button class = "btn-big" variant="light" href="/Profile">
            <i class="bi bi-file-person btn-big"></i>
            </Button> </li>
            <li><Button class = "btn-big" variant="light" href="/Social"><i class="bi bi-trophy"></i></Button> </li>
            <li><Button class = "btn-big" variant="light" href="/Events"><i class="bi bi-calendar2 btn-big"></i></Button></li>
            
            
        </ul>
  </>);
  
  }
}