import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div>
        <div id="skill-box">
          <div id="skills">
            <ul id="skills-ul">
              <li id="skills-li">
                <div id="skills-title">Python</div>
                <div id="skills-detail">研究(自然言語処理/機械学習)と趣味(Webアプリ等)に使用</div>
              </li>
              <li id="skills-li">
                <div id="skills-title">Go</div>
                <div id="skills-detail">2020年4月〜。Echoを使ったWebアプリ開発やインターンで使用</div>
              </li>
              <li id="skills-li">
                <div id="skills-title">Ruby</div>
                <div id="skills-detail">主にRailsを使ったWebアプリ開発に使用</div>
              </li>
              <li id="skills-li">
                <div id="skills-title">JavaScript</div>
                <div id="skills-detail">ReactなどのWebアプリのフロントに使用</div>
              </li>
              <li id="skills-li">
                <div id="skills-title">Kotlin</div>
                <div id="skills-detail">インターンでのAndroidアプリ開発</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
