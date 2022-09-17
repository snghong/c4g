import "./index.css";
import { Link } from "react-router-dom";
import SideBar from './SideBar'
function SignIn() {
  return (
    
    
    <div>
      <SideBar />
      Sign In
      
      
      <Link to="/signup">Sign Up</Link>
      
    </div>);}
export default SignIn;
