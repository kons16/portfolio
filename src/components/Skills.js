import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div>
        <div id="skill-box">
          <div id="skills">
            <ul id="skills-ul">
              <li id="skills-li">Python</li>
              <li id="skills-li">Ruby</li>
              <li id="skills-li">JavaScript</li>
              <li id="skills-li">C</li>
              <li id="skills-li">Java</li>
            </ul>
            <ul id="skills-ul">
              <li id="skills-li">Ruby on Rails</li>
              <li id="skills-li">Flask</li>
              <li id="skills-li">React</li>
            </ul>
            <ul id="skills-ul-bottom">
              <li id="skills-li">AWS(EC2, S3)</li>
              <li id="skills-li">Firebase<br/>(Firestore, Hosting)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
