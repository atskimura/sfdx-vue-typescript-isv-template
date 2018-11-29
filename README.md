# sfdx-vue-typescript-sample

SFDX, Vue.js, TypeScriptを使用したSalesforceの管理パッケージ開発のサンプルです。

## 環境構築

1. 事前準備

DevHub組織の設定、DevHub組織に使用するネームスペースの登録まで事前に行ってください。

2. DevHub組織に接続

```
sfdx force:auth:web:login -a <エイリアス名>
```

3. npmパッケージのインストール

```
npm install
```

4. ネームスペースを設定

以下のファイルの`mynamespace`となっている箇所を変更します。

* `sfdx-project.json`
* `src/config.ts`

以下のサンプルデータ用のファイルもそのまま試したい場合は置換してください。

* `config/data/Room__c.json`
* `config/soql/Room__c.soql`

以下のようなperlコマンドで置換すると楽に置換できます。

```
perl -pi -e "s/mynamespace__/myrealnamespace__/g" ./config/data/Room__c.json
```

5. スクラッチ組織を作成

```
npm run setup
```

このコマンドで以下の処理を行います。

* スクラッチ組織の作成
* リソースのpush
* 権限セットの付与
* データのインポート


## コマンド

### スクラッチ組織作成し、初期化
```
npm run setup
```

### ローカル開発
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### ビルドしてスクラッチ組織にデプロイ
```
npm run deploy
```

### スクラッチ組織を開く
```
npm run open
```

### スクラッチ組織にpush
```
npm run push
```

### スクラッチ組織にforce push
```
npm run pushf
```

### スクラッチ組織からpull
```
npm run pull
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## ポイント

* Apex実行
  * JavaScript Remotingを使用する。
  * ローカル開発ではSalesforceへのアクセスはモックを使用する。
* Lightning Design System
  * `apex:slds` タグを使用する。
  * ローカルでは、CDNから取得する。
  * ただし、SVGアイコンの表示はうまくいかず、仕方なくLDSのnpmパッケージからurl-loaderでimgタグに埋め込んでいる。
* 画像
  * file-loaderだと静的リソースのパスを渡すのが大変なので、url-loaderのみ使うようにしている。