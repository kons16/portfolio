import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div>
        <div id="product-box">
          <div id="product">
            <ul id="product-ul">
              <a id="product-li-icon"></a>
              <a id="product-li-title">Concierge</a>
              <a id="product-li"></a>
              <a id="product-li-detail">
                会話を続けるためのコツは「深堀り」と「質問」が大切だと言われています.
                このConcierge(コンシェルジュ)は1対1のチャットアプリに自動で質問生成を行う機能がついているため、
                会話を簡単に続けることができます.
                <a href="https://github.com/kons16/Concierge" target="_blank">[GitHub]</a>
              </a>
              <a id="product-li"></a>
              <a id="product-li-use">
                使用した技術: Ruby on Rails, Flask, MySQL, EC2, S3
              </a>
              <a id="product-li-icon"></a>
              <a id="product-li-title">ClassDeru</a>
              <a id="product-li"></a>
              <a id="product-li-detail">
                ClassDeru(クラスデル)は大学の授業における出席を簡単に取ることのできるWebアプリです.
                学生が1クリックで授業に出席でき,<br />教員の方は誰が出席しているのか画面上で確認できる他,<br />
                CSVで出席者一覧をダウンロードできます. <br />
                <a href="https://github.com/kons16/ClassDeru" target="_blank">[GitHub]</a>
              </a>
              <a id="product-li"></a>
              <a id="product-li-use">
                使用した技術: Laravel, SQLite
              </a>
              <a id="product-li-icon"></a>
              <a id="product-li-title">HONS</a>
              <a id="product-li"></a>
              <a id="product-li-detail">
                HONS(ホンズ)は読んだ本を記録できるWebアプリです. 本の記録にはAmazonの
                Product Advertising APIを用いています. <br />
                <a href="https://github.com/kons16/HONS" target="_blank">[GitHub]</a>
              </a>
              <a id="product-li"></a>
              <a id="product-li-use">
                使用した技術: Ruby on Rails, PA-API, SQLite
              </a>
              <a id="product-li-icon"></a>
              <a id="product-li-title">ポートフォリオ</a>
              <a id="product-li"></a>
              <a id="product-li-detail">
              　私のポートフォリオサイトです. Reactを使用しています. <br />
                <a href="https://github.com/kons16/kons16.github.io" target="_blank">[GitHub]</a>
              </a>
              <a id="product-li"></a>
              <a id="product-li-use-last">
                使用した技術: React
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
