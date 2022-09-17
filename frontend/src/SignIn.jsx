import "./index.css";
import { Link } from "react-router-dom";
import SideBar from './SideBar'
import NavBar from './NavBar'

function SignIn() {
  return (
    
    <div>
          <NavBar />
      Sign In
      
      
      <Link to="/signup">Sign Up</Link>
      <SideBar />
    </div>);}
export default SignIn;
