import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <div id="about-box">
          <div id="about-detail">
            <p>
              茨城大学工学部情報工学科の4年生です。<br />
              研究では自然言語処理における短単位からの単語生成をテーマにしています。<br />
              個人の勉強としてはWeb開発に興味があるため、Railsなどのフレームワークを用いて<br/>
              Webアプリの開発を行っています。<br/><br/>

              今までPythonを一番多くの機会(研究/趣味)で使用していますが、<br/>
              Web開発ではRubyやJavaScriptを用いることが多いです。<br/><br/>

              インターンでは大学で学ぶことのできないWeb開発を中心に、<br/>
              フロント/バックエンド の知識を習得したいと考えています。
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
