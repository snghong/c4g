import "./index.css";
import SideBar from './SideBar'
import NavBar from "./NavBar"

function Math() {
    return (
        <div>
            <NavBar />
            <SideBar />
            <div className="math-box">
              <div class="course-big">
                <div class = "course-icon-big">
                <svg width="250" height="250" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                <path d="M91.6667 35.4167L50 8.33337L8.33333 35.4167V64.5834L50 91.6667L91.6667 64.5834V35.4167Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M50 91.6667V64.5834" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M91.6667 35.4166L50 64.5833L8.33333 35.4166" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.33333 64.5833L50 35.4166L91.6667 64.5833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M50 8.33337V35.4167" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="course-name-big" >Math</div>
            </div>
            <div>
            </div>
            <div >
            <ul class = "math-links">
              <li>
              <p><a href = "https://www.khanacademy.org/">Khan Academy </a> </p>
              </li>
              <li>
              <p><a href = "https://www.ixl.com/">IXL Learning</a></p>
              </li>
              <li>
             <p><a href = "https://www.mathtrainer.io/">Math Trainer</a> </p>
              </li>
            </ul>
            </div>
            </div>
            </div>
    );
}
export default Math;
