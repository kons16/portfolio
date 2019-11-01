import React from 'react';

class Experiment extends React.Component {
  render() {
    return (
      <div>
        <div id="experiment-box">
          <div id="experiment">
            <ul id="experiment-ul">
              <a id="experiment-li-day">2019年4月〜6月</a>
              <a id="experiment-li-company">株式会社ユニキャスト 就業型インターン</a>
              <a id="experiment-li"></a>
              <a id="experiment-li-detail">
                C#(ASP.NET)を使った企業受付向けアプリのサーバーサイドの<br />開発.
                Railsを利用したWebサイトの修正.
              </a>
              <a id="experiment-li-day">2019年5月</a>
              <a id="experiment-li-company">株式会社ミクシィ git challenge #11</a>
              <a id="experiment-li"></a>
              <a id="experiment-li-detail">
                gitに関連した問題を2人1組のチームで解いていく.
              </a>
              <a id="experiment-li-day">2019年9月</a>
              <a id="experiment-li-company">フューチャー株式会社 EngineerCamp</a>
              <a id="experiment-li"></a>
              <a id="experiment-li-detail">
                フロントにJavaScript, サーバーサイトにJava(SpringBoot,uroboroSQL)を利用したWebアプリの開発.
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiment;
