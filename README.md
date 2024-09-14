## （管理者用） JWT トークン生成

1) 秘密鍵生成
2) 環境変数(`JWT_SECRET_KEY `)を設定
3) JWT トークン生成
4) ユーザーに JWT トークン連携

```javascript
// 秘密鍵生成
node script/jwt-generate-secret-key.js

// JTW トークン生成
node script/jwt-sign.js
```

## （ユーザー用） API 使用方法

1) 管理者に連絡をして JWT トークンを受け取る
2) JWT トークンをヘッダーに設定してリクエストする

以下はサンプルです。

```sh
curl -X GET "https://search-the-hero.vercel.app/api/characters" \
     -H "Authorization: Bearer $JWT_TOKEN" \
     -H "Content-Type: application/json"
```

JWT トークンの有効期限は 30 日間です。
