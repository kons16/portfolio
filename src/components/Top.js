import React from 'react';

class Top extends React.Component {
  render() {
    return (
      <div>
        <img src={`${process.env.PUBLIC_URL}/manbo.jpg`} id="mylogo" alt="my-icon"/>
        <h1 id="myname">
          Kono Shinji
          <a href="https://github.com/kons16" target="_blank" rel="noreferrer noopener">
            <img src={`${process.env.PUBLIC_URL}/octcat64.png`} id="github-icon" alt="github-icon"/>
          </a>
        </h1>
      </div>
    );
  }
}

export default Top;
