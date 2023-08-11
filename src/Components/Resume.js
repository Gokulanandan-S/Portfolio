import '../App.css';
const Resume=()=>{
    return(
        <section id="resume" className="section resume-section" >
        
        <div className="resume">
            <section>
              <h2>Experience</h2>
              <div>
                <h3>Software Engineer</h3>
                <p>ABC Tech Solutions</p>
                <p>Jan 2021 - Present</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in urna magna..</li>
                  <li>Aliquam in odio aliquam, pulvinar turpis ut, dapibus ipsum. Aenean pretium velit quis placerat fermentum. </li>
                  <li> Morbi aliquet vel dui sit amet laoreet. Proin fringilla mattis erat, ut vehicula ante mattis at.</li>
                </ul>
              </div>
              <div>
                <h3>Frontend Developer</h3>
                <p>XYZ Web Studio</p>
                <p>May 2016 - Dec 2020</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in urna magna..</li>
                  <li>Aliquam in odio aliquam, pulvinar turpis ut, dapibus ipsum. Aenean pretium velit quis placerat fermentum. </li>
                  <li> Morbi aliquet vel dui sit amet laoreet. Proin fringilla mattis erat, ut vehicula ante mattis at.</li>
                </ul>
              </div>
            </section>
            
          <div className="education">
            <h2>Education</h2>
            <p>Bachelor of Technology - Artificial Intelligence And Data Science</p>
            <h2>Skills</h2>
              <ul className="skills">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>HTML5 & CSS3</li>
                <li>RESTful APIs</li>
                <li>Responsive Design</li>
                <li>Git</li>
                <li>Bootstrap</li>
              </ul>
          </div>
 
          
        </div>
        </section>
  
    );
}
export default Resume;