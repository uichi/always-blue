---
date: 2018-04-04 00:00
title: WordPressのセキュリティを強化する
description: ''
tags: []
---

## なぜWordPressのセキュリティを強化するのか

世界で使われているCMSの約6割のシェアを誇るWordPressですが、オープンソースであるため脆弱性が発見されやすく攻撃の対象になる可能性が極めて高いです。とくに、日本ではサイバーセキュリティに対する関心度が低いせいか、世界中から格好の餌食とされています。

実際に攻撃されてしまうと、サイト記事の改ざんや重要なコアファイルの改ざん、ログイン画面への不正アクセスなどの被害に会う羽目になります。

> 参考
https://forbesjapan.com/articles/detail/15532

> サイバー攻撃可視化サイト
https://cybermap.kaspersky.com/ja/
http://www.nicter.jp/ (情報通信研究機構が公開しているものです。)

## 対策

### 管理者画面
+ プラグインやWordPressの更新(これできてない人多い…)
+ ログインパスワードを初期値のままにしない
+ ログインパスワードは簡単なものにしない
+ ログインユーザー名とログインパスワードを同じものにしない

これらは誰でもすぐにできることなので必ずやること!

### サーバ
+ wp-config.phpの移動
+ パーミッション
+ xmlrpc.phpへのアクセスをリダイレクト
+ SSHでrootアクセスできないようにする

### wp-config.phpの移動
wp-config.phpを一つ上の階層に移動させることで、外部から簡単にアクセスされるのを防ぎます。

パーミッション
所有者とグループの読み込み権限を付与します。
`chmod 440 wp-config.php`

### xmlrpc.phpへのアクセスをリダイレクト
.htaccessの中に

```
RewriteRule ^xmlrpc\.php$ “http\:\/\/0\.0\.0\.0\/” [R=301,L]
```

を追加することで301ステータスに飛ばすことが出来ます。

RewriteBaseの下にでも追加しておきましょう。

```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^xmlrpc\.php$ “http\:\/\/0\.0\.0\.0\/” [R=301,L]
RewriteRule ^index\.php$ – [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```

### SSHでrootアクセスできないようにする
rootのままだと、ハッキングされた場合に被害が大きいためアクセス条件などを変更します。

ユーザを新しく追加します。usernameのところは任意のユーザ名に変えてください。

```
adduser username
passwd username
```

ユーザーhogeをwheelグループに追加します。

```
usermod -G wheel hoge
```

ここからssh接続の条件を変更していきます。

```
sudo vim /etc/ssh/sshd_config

```

```
#ポート番号をデフォルトから変更します。
#Port 22
Port 20473

#ssh2以外のプロトコルを受け付けない
#Protocol 2
Protocol 2

#rootでのログインを禁止する
PermitRootLogin no

#パスワードでのログインを許可する
PasswordAuthentication yes

#パスワードを必須にする
PermitEmptyPassword no
```

ポート番号は別の番号でも可です。

設定が完了したら`systemctl restart sshd.service`でsshdを再起動しましょう。

```
ssh username@[ホスト or IPアドレス] -p [ポート番号]
```

で接続の確認ができたら成功です。