import { z } from "zod";

export const Rarity = z.enum([
	"ur",
	"sr",
	"r",
	"n"
]);

export const Type = z.enum([
	"str",
	"abl",
	"int",
	"mnd",
	"dst",
]);

export const Sex = z.enum([
	"男",
	"女",
]);

export const Name = z.enum([
	'緑谷出久',
	'爆豪勝己',
	'麗日お茶子',
	'飯田天哉',
	'轟焦凍',
	'蛙吹梅雨',
	'峰田実',
	'切島鋭児郎',
	'八百万百',
	'常闇踏陰',
	'上鳴電気',
	'耳郎響香',
	'芦戸三奈',
	'障子目蔵',
	'尾白猿夫',
	'瀬呂範太',
	'物間寧人',
	'拳藤一佳',
	'鉄哲徹鐵',
	'小森希乃子',
	'通形ミリオ',
	'天喰環',
	'波動ねじれ',
	'心操人使',
	'オールマイト',
	'相澤消太',
	'プレゼント・マイク',
	'ミッドナイト',
	'Mt.レディ',
	'エンデヴァー',
	'グラントリノ',
	'ベストジーニスト',
	'エッジショット',
	'サー・ナイトアイ',
	'ファットガム',
	'ホークス',
	'死柄木弔',
	'黒霧',
	'ステイン',
	'荼毘',
	'トガヒミコ',
	'マスキュラー',
	'トゥワイス',
	'Mr.コンプレス',
	'オール・フォー・ワン',
	'オーバーホール',
	'ジェントル・クリミナル',
	'夜嵐イナサ',
	'肉倉精児',
	'現見ケミィ',
	'ミルコ',
	'外典',
	'リ・デストロ',
	'レディ・ナガン',
	'フレクト・ターン',
	'スターアンドストライプ'
]);

export const CharacterSkills = z.enum([
	'パワーダウン',
	'パワーアップ',
	'スピードアップ',
	'スピードダウン',
	'スキル威力アップ',
	'プルスウルトラゲージ増加',
	'くいしばり',
	'クリティカル率アップ',
	'逆境',
	'HP自動回復',
	"自分のスピードに応じてスキル威力アップ",
	'プルスウルトラ技威力アップ',
	'クリティカル率ダウン',
	'回避',
	'クールタイム短縮',
	'不屈',
	'貫通',
	'高揚',
	'ディフェンスダウン',
	'拘束命中率アップ',
	'必中',
	'拘束',
	'ディフェンスアップ',
	'一時的な強化解除',
	'出血',
	'最大HPアップ',
	'スタン',
	'クリティカル威力アップ',
	'発勁',
	'状態異常無効',
	'ダメージカット',
	'全体攻撃',
	'状態異常解除',
	'状態変化解除',
	'スキル威力ダウン',
	'暗闇',
	'見切り',
	'最大HPダウン完全耐性',
	'プルスウルトラ効率アップ',
	'燃焼',
	'余裕',
	'圧倒',
	'クリティカル抵抗アップ',
	'強化阻害',
	'HP回復',
	'バリア',
	'回復',
	'被ダメージ回復',
	'隠れる',
	'ニトロ',
	'クールタイム軽減',
	'クールタイム増加',
	'カウンター',
	'回復阻害',
	'アクションスキル威力ダウン',
	'身軽',
	'プルスウルトラゲージ上昇率ダウン',
	'プルスウルトラゲージ減少',
	'2回攻撃',
	'通常攻撃威力アップ',
	'スピードダウン完全耐性',
	'かばう',
	'氷結',
	'状態異常カウンター',
	'燃焼耐性アップ',
	'氷結耐性アップ',
	'命中率アップ',
	'凍傷',
	'霜',
	'プルスウルトラ技威力ダウン',
	'燃焼命中率アップ',
	'氷結命中率アップ',
	'アクションスキル威力アップ',
	'凍傷耐性アップ',
	'保護色',
	'混乱',
	'スタン完全耐性',
	'恐怖完全耐性',
	'拘束耐性アップ',
	'スタン耐性アップ',
	'麻痺',
	'麻痺耐性アップ',
	'麻痺命中率アップ',
	'与ダメージ回復',
	'混乱耐性ダウン',
	'アクションスキルダメージ軽減',
	'混乱耐性アップ',
	'挑発',
	'クリティカル抵抗ダウン',
	'出血ダメージ軽減',
	'象徴',
	'平静',
	'スキル封印',
	'混乱完全耐性',
	'魅了',
	'業火',
	'クールタイム延長',
	'恐怖',
	'恐怖命中率アップ',
	'燃焼ダメージ軽減',
	'燃焼耐性ダウン',
	'出血命中率アップ',
	'弾性',
	'肉塊',
	'最大HPダウン',
	'凍傷命中率アップ',
	'ストレス',
	"鋭利",
	"クリティカル率ダウン完全耐性",
] as const)

export const MemorySkills = z.enum([
	'パワーアップ',
	'クリティカル率アップ',
	'スピードアップ',
	'最大HPアップ',
	'クールタイム軽減',
	'スキル威力アップ',
	'状態変化解除',
	'プルスウルトラ技威力アップ',
	'プルスウルトラゲージ増加',
	'くいしばり',
	'パワーダウン',
	'スピードダウン',
	'クリティカル威力アップ',
	'HP自動回復',
	'被ダメージ回復',
	'回避',
	'バリア',
	'ディフェンスアップ',
	'恐怖耐性アップ',
	'状態異常無効',
	'身軽',
	'クリティカル率ダウン',
	'スキル封印耐性アップ',
	'回復',
	'クリティカル抵抗アップ',
	'通常攻撃威力アップ',
	'状態異常解除',
	'アクションスキル威力アップ',
	'高揚',
	'クールタイム短縮',
	'ディフェンスダウン',
	'燃焼・出血ダメージ軽減',
	'出血耐性アップ',
	'拘束耐性アップ',
	'余裕',
	'ダメージカット',
	'スキルダメージ軽減',
	'燃焼ダメージ軽減',
	'逆境',
	'出血命中率アップ',
	'暗闇耐性アップ',
	'拘束命中率アップ',
	'アクションスキルダメージ軽減',
	'麻痺耐性アップ',
	'スタン耐性アップ',
	'アクションスキル威力ダウン',
	'出血ダメージ軽減',
	'2回攻撃',
	'スキル威力ダウン',
	'氷結耐性アップ',
	'混乱耐性アップ',
	'燃焼耐性アップ',
	'恐怖',
	"クリティカル抵抗ダウン"
] as const)


export const Tags = z.enum([
	'雄英高校1年A組',
	'雄英高校生徒',
	'ヒーロー',
	'雄英高校1年B組',
	'ビッグ3',
	'雄英高校教師',
	'プロヒーロー',
	'敵＜ヴィラン＞連合',
	'敵＜ヴィラン＞',
	'死穢八斎會',
	'士傑高校'
])
