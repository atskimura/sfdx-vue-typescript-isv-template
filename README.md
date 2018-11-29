# sfdx-vue-typescript-sample

## 環境構築

DevHub組織に接続

```
sfdx force:auth:web:login -a <エイリアス名>
```

npmパッケージのインストール

```
npm install
```

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