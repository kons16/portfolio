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
                このConcierge(コンシェルジュ)は1対1のチャットアプリに自動で質問生成を行う機能がついているため,
                会話を簡単に続けることができます.
                <a href="https://github.com/kons16/Concierge" target="_blank" rel="noreferrer noopener">[GitHub]</a>
              </div>
              <div id="works-li"></div>
              <div id="works-li-use">
                使用した技術: Ruby on Rails, Flask, MySQL, EC2, S3
             </div>
              <div id="works-li"></div>

              <div id="works-li-title">ClassDeru</div>
              <div id="works-li-icon">
                <img src={`${process.env.PUBLIC_URL}/classderu.png`} id="works-icon" alt="works-icon" />
              </div>
              <div id="works-li-detail">
                ClassDeru(クラスデル)は大学の授業における出席を簡単に取ることのできるWebアプリです.
                学生が1クリックで授業に出席でき, 教員の方は誰が出席しているのか画面上で確認できる他, 
                CSVで出席者一覧をダウンロードできます. <br />
                <a href="https://github.com/kons16/ClassDeru" target="_blank" rel="noreferrer noopener">[GitHub]</a>
              </div>
              <div id="works-li"></div>
              <div id="works-li-use">
                使用した技術: Laravel, SQLite
              </div>
              <div id="works-li"></div>

              <div id="works-li-title">アンケートアプリ</div>
              <div id="works-li-icon">
                <img src={`${process.env.PUBLIC_URL}/q-kekka.png`} id="works-icon" alt="works-icon" />
              </div>
              <div id="works-li-detail">
                Reactの勉強のために作成したアンケートアプリです. 誰でもアンケートの作成・回答が可能で,
                アンケート結果の保存とホスティングにFirebaseを利用しています. <br />
                <a href="https://github.com/kons16/questionnaire" target="_blank" rel="noreferrer noopener">[GitHub]</a>
              </div>
              <div id="works-li"></div>
              <div id="works-li-use">
                使用した技術: React, Firebase(Firestore, Hosting)
              </div>
              <div id="works-li-icon"></div>

              <div id="works-li-title">ポートフォリオ</div>
              <div id="works-li"></div>
              <div id="works-li-detail">
                このサイトです.<br />Reactを使用しています.
                <a href="https://github.com/kons16/kons16.github.io" target="_blank" rel="noreferrer noopener">[GitHub]</a>
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
