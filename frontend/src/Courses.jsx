import "./index.css";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div>
      <head>
        <link rel="stylesheet" 
            href= "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
      </head>
      <body>
        <h2>Courses</h2>
          <div className="course-container">
            <div className="course">
              <div>

              <svg width="95" height="94" viewBox="0 0 95 94" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
              <path d="M75.2083 47L47.5 74.4167L59.375 86.1667L87.0833 58.75L75.2083 47Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M65.3125 21.5417L71.25 50.9167L51.4583 70.5L21.7708 64.625L7.91666 7.83337L65.3125 21.5417Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.91666 7.83337L37.9446 37.5452" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M43.5417 50.9167C47.9139 50.9167 51.4583 47.4096 51.4583 43.0833C51.4583 38.7571 47.9139 35.25 43.5417 35.25C39.1694 35.25 35.625 38.7571 35.625 43.0833C35.625 47.4096 39.1694 50.9167 43.5417 50.9167Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
              </div>
              <div class="course-name">Math</div>
            </div>
            <div className="course">
              <div class="course-name">Science</div>
            </div>
            <div className="course hidden-course">
            </div>
          </div>
        <h2>Recommended Courses</h2>
          <div className="rec-course-container">
            <div className="course">
              History
            </div>
            <div className="course">
              English
            </div>
            <div className="course">
              Foreign Language
            </div>
          </div>
        {/*
        <center>
          <div class="container">
              <h3>
              To make horizontal scrollable in a bootstrap row?
              </h3>
              <div class="container horizontal-scrollable">
                  <div class="row text-center">
                      <div class="col-xs-4">1</div>
                      <div class="col-xs-4">2</div>
                      <div class="col-xs-4">3</div>
                      <div class="col-xs-4">4</div>
                      <div class="col-xs-4">5</div>
                      <div class="col-xs-4">6</div>
                      <div class="col-xs-4">7</div>
                  </div>
              </div>
          </div>
        </center>
      */}
      </body>
      
    </div>
  );
}

export default Courses;
