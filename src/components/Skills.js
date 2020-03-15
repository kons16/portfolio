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
                <div id="skills-detail">2年 研究(自然言語処理/機械学習)、趣味(Webアプリ・スクレイピング等)</div>
              </li>
              <li id="skills-li">
                <div id="skills-title">Ruby</div>
                <div id="skills-detail">1年半 Webアプリ</div>
              </li>
              <li id="skills-li">
                <div id="skills-title">JavaScript</div>
                <div id="skills-detail">1年半 Webアプリ</div>
              </li>
              <li id="skills-li">
                <div id="skills-title">Kotlin</div>
                <div id="skills-detail">1ヶ月 インターンでのAndroidアプリ開発</div>
              </li>
            </ul>
            <ul id="skills-ul">
              <li id="skills-li">
                <div id="skills-title">Ruby on Rails</div>
                <div id="skills-detail">趣味・業務で使用</div>
              </li>
              <li id="skills-li">
                <div id="skills-title">React</div>
                <div id="skills-detail">ポートフォリオサイトの開発など</div>
              </li>
            </ul>
            <ul id="skills-ul-bottom">
              <li id="skills-li">
                <div id="skills-title">AWS</div>
                <div id="skills-detail">EC2, Lambda, S3, Route53などを趣味で使用</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
