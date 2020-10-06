import React from 'react';

class Works extends React.Component {
  render() {
    return (
      <div>
        <div id="works-box">
          <div id="works">
            <ul id="works-ul">
              <div id="works-li"></div>

              <div id="works-li-title">Concierge</div>
              <div id="works-li-icon">
                <img src={`${process.env.PUBLIC_URL}/concierge.png`} id="works-icon" alt="works-icon" />
              </div>
              <div id="works-li-detail">
                会話を続けるためのコツは「深堀り」と「質問」が大切だと言われています.
                この Concierge(コンシェルジュ) は1対1のチャットアプリに自動で質問生成を行う機能がついているため,
                会話を簡単に続けることができます.
                <a href="https://github.com/kons16/Concierge" target="_blank" rel="noreferrer noopener">[GitHub]</a>
              </div>
              <div id="works-li"></div>
              <div id="works-li-use">
                使用した技術: Ruby on Rails, Flask, MySQL, Docker, AWS
             </div>
              <div id="works-li"></div>

              <div id="works-li-title">meibun</div>
              <div id="works-li-icon">
                <img src={`${process.env.PUBLIC_URL}/meibun_top.png`} id="works-icon" alt="works-icon" />
              </div>
              <div id="works-li-detail">
                本に登場する名文を記録できるWebアプリです。バックエンドは Go+DDD構成、フロントは React+TypeScript で開発しました。
                <a href="https://github.com/kons16/meibun" target="_blank" rel="noreferrer noopener">[GitHub]</a>
              </div>
              <div id="works-li"></div>
              <div id="works-li-use">
                使用した技術: Go, MySQL, Docker, React, TypeScript
             </div>
              <div id="works-li"></div>

              <div id="works-li-title">タスク管理アプリ</div>
              <div id="works-li-icon">
                <img src={`${process.env.PUBLIC_URL}/labord.png`} id="works-icon" alt="works-icon" />
              </div>
              <div id="works-li-detail">
                React+AWS でサーバーレスなタスク管理アプリを開発しました。タスクを投稿すると Lambda から slack にタスク内容が投稿されるようになっています。
                また CircleCI で S3 にホスティングさせています。
                <a href="https://github.com/kons16/Labord" target="_blank" rel="noreferrer noopener">[GitHub]</a>
              </div>
              <div id="works-li"></div>
              <div id="works-li-use">
                使用した技術: React, CircleCI, <br/>AWS(Route53, CloudFront, S3, Lambda, DynamoDB)
              </div>
              <div id="works-li-icon"></div>

              <div id="works-li-title">ポートフォリオ</div>
              <div id="works-li"></div>
              <div id="works-li-detail">
                このサイトです.<br />React を使用しています.
                <a href="https://github.com/kons16/portfolio" target="_blank" rel="noreferrer noopener">[GitHub]</a>
              </div>
              <div id="works-li"></div>
              <div id="works-li-use-last">
                使用した技術: React
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
