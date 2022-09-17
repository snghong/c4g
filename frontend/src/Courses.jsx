import "./index.css";
import SideBar from './SideBar'
import NavBar from "./NavBar"
function Courses() {
  return (
    <div>
      <NavBar />
      <SideBar />
        <div class="course-and-boxes float-right">
          <h2>Recommended Courses</h2>
          <div className="course-container">
            {/* <h2>Courses</h2> */}
            <a href = "/Math" style={{ textDecoration: 'none', color:"black" }}>
            <div className="course math">
              <div class="course-icon">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                <path d="M91.6667 35.4167L50 8.33337L8.33333 35.4167V64.5834L50 91.6667L91.6667 64.5834V35.4167Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M50 91.6667V64.5834" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M91.6667 35.4166L50 64.5833L8.33333 35.4166" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.33333 64.5833L50 35.4166L91.6667 64.5833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M50 8.33337V35.4167" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="course-name"  >Math</div>
            </div>
            </a>
            <div className="course science">
              <div class="course-icon">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                <path d="M75.2083 47L47.5 74.4167L59.375 86.1667L87.0833 58.75L75.2083 47Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M65.3125 21.5417L71.25 50.9167L51.4583 70.5L21.7708 64.625L7.91666 7.83337L65.3125 21.5417Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.91666 7.83337L37.9446 37.5452" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M43.5417 50.9167C47.9139 50.9167 51.4583 47.4096 51.4583 43.0833C51.4583 38.7571 47.9139 35.25 43.5417 35.25C39.1694 35.25 35.625 38.7571 35.625 43.0833C35.625 47.4096 39.1694 50.9167 43.5417 50.9167Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="course-name">Science</div>
            </div>
            <div className="course hidden-course">
            </div>
          </div>
        </div>

        <div class="course-and-boxes">
          <h2>All Courses</h2>
          <div className="course-container">
            <div className="course history">
              <div class="course-icon">
                <svg width="100" height="100" viewBox="-5 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                <path d="M44 80.6667C64.2504 80.6667 80.6667 64.2505 80.6667 44C80.6667 23.7496 64.2504 7.33337 44 7.33337C23.7496 7.33337 7.33333 23.7496 7.33333 44C7.33333 64.2505 23.7496 80.6667 44 80.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.33333 44H80.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M58.6667 44C58.3834 30.4042 53.1714 17.374 44 7.33337C34.8286 17.374 29.6166 30.4042 29.3333 44C29.6166 57.5959 34.8286 70.6261 44 80.6667C53.1714 70.6261 58.3834 57.5959 58.6667 44Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="course-name" style={{ textDecoration: 'none' }}>History</div>
            </div>
            <div className="course english">
              <div class="course-icon">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                <path d="M33.3333 12.5H8.33334V75H37.5C40.8152 75 43.9946 76.317 46.3388 78.6612C48.6831 81.0054 50 84.1848 50 87.5V29.1667C50 24.7464 48.2441 20.5072 45.1185 17.3816C41.9929 14.2559 37.7536 12.5 33.3333 12.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M66.6667 12.5H91.6667V75H62.5C59.1848 75 56.0054 76.317 53.6612 78.6612C51.317 81.0054 50 84.1848 50 87.5V29.1667C50 24.7464 51.7559 20.5072 54.8816 17.3816C58.0072 14.2559 62.2464 12.5 66.6667 12.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>    
              </div>
              <div class="course-name">English</div>
            </div>
            <div className="course foreign">
              <div class="course-icon">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                <path d="M41.1612 6.57538C43.5054 4.60625 46.6848 3.5 50 3.5C53.3152 3.5 56.4946 4.60625 58.8388 6.57538C61.183 8.54451 62.5 11.2152 62.5 14V42C62.5 44.7848 61.183 47.4555 58.8388 49.4246C56.4946 51.3938 53.3152 52.5 50 52.5C46.6848 52.5 43.5054 51.3938 41.1612 49.4246C38.817 47.4555 37.5 44.7848 37.5 42V14C37.5 11.2152 38.817 8.54451 41.1612 6.57538Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M79.1666 35V42C79.1666 48.4978 76.0937 54.7295 70.6239 59.3241C65.1541 63.9188 57.7355 66.5 50 66.5C42.2645 66.5 34.8458 63.9188 29.376 59.3241C23.9062 54.7295 20.8333 48.4978 20.8333 42V35" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M50 66.5V80.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M33.3333 80.5H66.6666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="course-name">Foreign Language</div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Courses;
