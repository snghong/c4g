import "./index.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      Sign In
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default SignIn;
