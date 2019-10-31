import React from 'react';

class Top extends React.Component {
  render() {
    return (
      <div>
        <div id="top-image">
            <img src={`${process.env.PUBLIC_URL}/debudori.png`} id="mylogo" />
            <h1 id="myname">Kono Shinji</h1>
            <a href="https://github.com/kons16" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/octcat64.png`} id="github-icon" />
            </a>
            <h3 id="career">
            茨城大学工学部情報工学科4年 
            </h3>
        </div>
      </div>
    );
  }
}

export default Top;
