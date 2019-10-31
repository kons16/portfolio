import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <div>
        <div id="skill-box">
          <div id="skills">
            <ul id="skills-ul">
              <li id="skills-li">Python</li>
              <li id="skills-li">Ruby</li>
              <li id="skills-li">JavaScript</li>
              <li id="skills-li">C/C#</li>
              <li id="skills-li">Java</li>
            </ul>
            <ul id="skills-ul">
              <li id="skills-li">Ruby on Rails</li>
              <li id="skills-li">Flask</li>
              <li id="skills-li">ASP.NET</li>
              <li id="skills-li">React</li>
            </ul>
            <ul id="skills-ul">
              <li id="skills-li">AWS(EC2, S3)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
