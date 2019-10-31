import React from 'react';

class Top extends React.Component {
  render() {
    return (
      <div>
        <img src={`${process.env.PUBLIC_URL}/debudori.png`} id="mylogo" />
        <div id="myname">Kono Shinji</div>
        <a href="https://github.com/kons16" target="_blank">
          <img src={`${process.env.PUBLIC_URL}/octcat64.png`} id="github-icon" />
        </a>
        <div id="career">茨城大学工学部情報工学科4年</div>
      </div>
    );
  }
}

export default Top;
