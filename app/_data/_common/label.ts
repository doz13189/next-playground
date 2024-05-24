import { z } from "zod";
import { Tags } from "./schema";

const TagsLabel: { [key in z.infer<typeof Tags>]: string } = {
	singleBuffPowerUP: "単体パワーアップ",
	singleActionSkillImpactUp: "aa",
	allBuffPowerUP: "全体パワーアップ",
	singleBuffDefenseUP: "単体デフェンスアップ",
	allBuffDefenseUP: "全体デフェンスアップ",
	singleBuffSpeedUP: "単体スピードアップ",
	singleBuffMaxHpUP: "単体HPアップ",
	allBuffMaxHpUP: "全体HPアップ",
	singleSpeedUp: "単体スピードアップ",
	allSpeedUp: "全体スピードアップ",
	singleBuffCriticalUp: "単体クリティカル率アップ",
	singleCriticalDamageDown: "",
	burning: "燃焼",
	stunImmunity: "スタン無効",
	singlePowerUp: "単体パワーアップ",
	allPowerUp: "全体パワーアップ",
	allSkillImpactUp: "dddd",
	singleSkillImpactUp: "ccccc",
	allCriticalDamageDown: "bbbbb",
	allBuffSkillImpactUp: "全体スキル威力アップ",
	allBuffPlusUltraGaugeUp: "全体PUゲージアップ",
	actionSkillDamageDown: "アクションスキルダメージダウン",
	allActionSkillImpactUp: "全体アクションスキル威力アップ",
	aggro: "挑発",
	agile: "身軽",
	barrier: "バリア",
	bindHitRateUp: "拘束命中率アップ",
	bleedHitRateUp: "出血命中率アップ",
	bleedingDamageDown: "出血ダメージ軽減",
	blindHitRateUp: "暗闇命中率アップ",
	bullseye: "必中",
	burnHitRateUp: "燃焼命中率アップ",
	burningDamageDown: "燃焼ダメージダウン",
	camouflage: "保護色",
	cancelStatusAilments: "状態異常解除",
	charmHitRateUp: "魅了命中率アップ",
	composure: "余裕",
	confusionHitRateUp: "混乱命中率アップ",
	coolDownTimeDown: "クールタイム軽減",
	counter: "カウンター",
	cover: "かばう",
	criticalDamageDown: "クリティカルダメージ軽減",
	criticalHitImpactUp: "クリティカル威力アップ",
	criticalHitRateDown: "クリティカル率ダウン",
	criticalHitRateUp: "クリティカル率アップ",
	criticalResistanceDown: "クリティカル抵抗ダウン",
	criticalResistanceUp: "クリティカル抵抗アップ",
	damageDown: "ダメージカット",
	damageTakenRestore: "被ダメージ回復",
	dealtDamageRestore: "与ダメージ回復",
	defenseDown: "ディフェンスダウン",
	doubleAttack: "2回攻撃",
	ecstatic: "高揚",
	elasticity: "弾性",
	evasion: "回避",
	fearHitRateUp: "恐怖命中率アップ",
	freezeHitRateUp: "氷結命中率アップ",
	frostbiteHitRateUp: "凍傷命中率アップ",
	hellfireHitRateUp: "業火命中率アップ",
	hide: "隠れる",
	hitRateUp: "命中率アップ",
	hpRegeneration: "HP自動回復",
	lastStand: "くいしばり",
	maxHpDown: "最大HPダウン",
	multiUseSkills: "連撃",
	normalAttackDamageDown: "通常攻撃ダメージダウン",
	normalAttackImpactUp: "通常攻撃威力アップ",
	overwhelm: "圧倒",
	paralysisHitRateUp: "麻痺命中率アップ",
	persistence: "不屈",
	phaseDamageDown: "フェーズダメージカット",
	piercingShot: "貫通",
	plusUltraGaugeChargingUp: "プルスウルトラゲージ上昇量アップ",
	plusUltraGaugeUp: "プルスウルトラゲージアップ",
	plusUltraMoveDamageDown: "プルスウルトラ技ダメージダウン",
	plusUltraMoveImpactUp: "プルスウルトラ技威力アップ",
	powerDown: "パワーダウン",
	puGaugeFillRateDown: "プルスウルトラゲージ上昇率ダウン",
	recovery: "回復",
	reduceBurningAndBleeding: "燃焼・出血ダメージ軽減",
	removeBuffs: "状態変化解除",
	resilience: "逆境",
	sharpEye: "見切り",
	skillDamageDown: "スキルダメージ軽減",
	skillImpactUp: "スキル威力アップ",
	speedDown: "スピードダウン",
	statusAilmentCounter: "状態異常カウンター",
	statusAilmentNull: "状態異常無効",
	stunHitRateUp: "スタン命中率アップ",
};

export const getTagLabel = (tag: z.infer<typeof Tags>) => {
	return TagsLabel[tag];
};
