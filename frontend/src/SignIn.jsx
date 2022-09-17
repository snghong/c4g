import "./index.css";
import { Link } from "react-router-dom";
import SideBar from './SideBar'
import NavBar from './NavBar'

function SignIn() {
  return (
    
    <div>
      <NavBar />
      <SideBar />
      Sign In
      
      
      <Link to="/signup">Sign Up</Link>
      
    </div>);}
export default SignIn;
