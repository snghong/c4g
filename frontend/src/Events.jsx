import "./index.css";
import SideBar from './SideBar'
import MyCalendar from './Calendar'
import NavBar from "./NavBar";
function Events() {
  return (
    <div>
    <NavBar className = "flex" />
    <SideBar />
    <div class="calendar"><MyCalendar /></div>
      
    </div>);}
export default Events;
