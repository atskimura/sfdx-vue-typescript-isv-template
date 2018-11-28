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

### スクラッチ組織作成
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

## 注意点

* 画像はimgタグを使用せず、cssのbackgroundを使用する。
* ローカル開発ではSalesforceへのアクセスはモックを使用する。