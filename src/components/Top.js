import React from 'react';

class Top extends React.Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={`${process.env.PUBLIC_URL}/debudori.png`} id="mylogo" alt="mylogo"/>
        </a>
        <h1 id="myname">
          Kono Shinji
          <a href="https://github.com/kons16" target="_blank" rel="noreferrer noopener">
            <img src={`${process.env.PUBLIC_URL}/octcat64.png`} id="github-icon" alt="github-icon"/>
          </a>
        </h1>
        <h3 id="career">茨城大学工学部情報工学科4年</h3>
      </div>
    );
  }
}

export default Top;
