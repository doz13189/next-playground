const cheerio = require("cheerio");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

const request = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

// ステータス効果の情報を抽出する関数
const getStatusEffects = async () => {
  try {
    // URLからHTMLを取得
    const response = await request("https://jp.myheroui.com/status-effects");
    const $ = cheerio.load(response);

    const statusEffects = [];

    // すべてのカードを処理
    $(".card.text-white.bg-dark.mb-1").each((index, element) => {
      // カード内のテキスト部分を取得
      const textDiv = $(element).find("div[style*='font-size: 16px']");

      if (textDiv.length > 0) {
        // テキスト内容を取得し整形
        const text = textDiv.html();

        // HTMLから名前と説明を分離
        if (text) {
          const parts = text.split("<br>");
          console.log("parts", parts);
          if (parts.length >= 2) {
            const name = parts[0].trim();
            // 残りの部分を説明として結合
            const description = parts.slice(1).join(" ").trim();

            // ステータス効果オブジェクトを作成（idなし）
            const statusEffect = {
              name: name,
              description: description
            };

            // アイコン画像があれば追加
            const imgSrc = $(element).find("img").attr("src");
            if (imgSrc) {
              statusEffect.iconUrl = imgSrc;
            }

            statusEffects.push(statusEffect);
          }
        }
      }
    });

    return statusEffects;
  } catch (error) {
    console.error("ステータス効果の取得中にエラーが発生しました:", error);
    return [];
  }
};

// メイン処理
(async () => {
  try {
    // すべてのステータス効果を取得
    const allStatusEffects = await getStatusEffects();
    console.log(`${allStatusEffects.length}件のステータス効果を取得しました。`);

    // 出力ディレクトリの準備
    const outputDir = path.join(__dirname, "tmp");

    // ディレクトリが存在しない場合は作成
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // すべてのステータス効果をJSONファイルとして保存
    const allEffectsPath = path.join(outputDir, "status_effects.json");
    fs.writeFileSync(allEffectsPath, JSON.stringify(allStatusEffects, null, 2), "utf8");
    console.log(`すべてのステータス効果を保存しました: ${allEffectsPath}`);

  } catch (error) {
    console.error("処理中にエラーが発生しました:", error);
  }
})();