import type { z } from "zod";
import type { SkillsSchema } from "./schema";

export const skills: z.infer<typeof SkillsSchema> = {
  skills: [
    // {
    //   name: "回復",
    //   description: "HPを回復する",
    // },
    {
      name: "状態変化解除",
      description:
        '一時的な強化を<span style="color:#00f50c;">X</span>つ解除する',
    },
    // {
    //   name: "状態異常解除",
    //   description: '一時的な<span style="color:#00f50c;">X</span>を解除する',
    // },
    {
      name: "強奪",
      description:
        '敵の一時的な強化を<span style="color:#00f50c;">X</span>個解除し、解除した強化を自分に付与する',
    },
    {
      name: "状態異常効果ターン短縮",
      description: "一時的な状態異常の効果ターン短縮",
    },
    // {
    //   name: "命中率ダウン",
    //   description: "状態異常命中率が減少する",
    // },
    {
      name: "状態変化解除",
      description: '状態異常を<span style="color:#00f50c;">X</span>つ回復する',
    },
    {
      name: "状態変化解除",
      description: '一時的な<span style="color:#00f50c;">X</span>を解除する',
    },
    // {
    //   name: "混乱命中率ダウン",
    //   description: "スキル使用時に混乱を付与する確率を下げる",
    // },
    // {
    //   name: "燃焼命中率ダウン",
    //   description: "スキル使用時に燃焼を付与する確率を下げる",
    // },
    // {
    //   name: "出血命中率ダウン",
    //   description: "スキル使用時に出血を付与する確率を下げる",
    // },
    // {
    //   name: "麻痺命中率ダウン",
    //   description: "スキル使用時に麻痺を付与する確率を下げる",
    // },
    // {
    //   name: "拘束命中率ダウン",
    //   description: "スキル使用時に拘束を付与する確率を下げる",
    // },
    // {
    //   name: "氷結命中率ダウン",
    //   description: "スキル使用時に氷結を付与する確率を下げる",
    // },
    // {
    //   name: "魅了命中率ダウン",
    //   description: "スキル使用時に魅了を付与する確率を下げる",
    // },
    // {
    //   name: "暗闇命中率ダウン",
    //   description: "スキル使用時に暗闇を付与する確率を下げる",
    // },
    // {
    //   name: "恐怖命中率ダウン",
    //   description: "スキル使用時に恐怖を付与する確率を下げる",
    // },
    // {
    //   name: "凍傷命中率ダウン",
    //   description: "スキル使用時に凍傷を付与する確率を下げる",
    // },
    // {
    //   name: "業火命中率ダウン",
    //   description: "スキル使用時に業火を付与する確率を下げる",
    // },
    {
      name: "業火",
      description:
        "燃焼を残りターン分のダメージに変換する　この効果にはクリティカルが発生することがある",
    },
    // {
    //   name: "状態異常解除",
    //   description: "状態異常を解除する",
    // },
    // {
    //   name: "パワーダウン耐性アップ",
    //   description: "パワーダウン状態になる確率を下げる",
    // },
    // {
    //   name: "ディフェンスダウン耐性アップ",
    //   description: "ディフェンスダウン状態になる確率を下げる",
    // },
    // {
    //   name: "スピードダウン耐性アップ",
    //   description: "スピードダウン状態になる確率を下げる",
    // },
    // {
    //   name: "最大HPダウン耐性アップ",
    //   description: "最大HPダウン状態になる確率を下げる",
    // },
    // {
    //   name: "クリティカル率ダウン耐性アップ",
    //   description: "クリティカル率ダウン状態になる確率を下げる",
    // },
    // {
    //   name: "スキル威力ダウン耐性アップ",
    //   description: "スキル威力ダウン状態になる確率を下げる",
    // },
    // {
    //   name: "プルスウルトラゲージ減少耐性アップ",
    //   description: "プルスウルトラゲージが減少する確率を下げる",
    // },
    // {
    //   name: "パワーダウン耐性ダウン",
    //   description: "パワーダウン状態になる確率を上げる",
    // },
    // {
    //   name: "ディフェンスダウン耐性ダウン",
    //   description: "ディフェンスダウンになる確率を上げる",
    // },
    // {
    //   name: "スピードダウン耐性ダウン",
    //   description: "スピードダウンになる確率を上げる",
    // },
    // {
    //   name: "最大HPダウン耐性ダウン",
    //   description: "最大HPダウンになる確率を上げる",
    // },
    // {
    //   name: "クリティカル率ダウン耐性ダウン",
    //   description: "クリティカル率ダウンになる確率を上げる",
    // },
    // {
    //   name: "スキル威力ダウン耐性ダウン",
    //   description: "スキル威力ダウン状態になる確率を上げる",
    // },
    // {
    //   name: "プルスウルトラゲージダウン耐性ダウン",
    //   description: "プルスウルトラゲージが減少する確率を上げる",
    // },
    {
      name: "基礎攻撃力アップ",
      description: "基礎攻撃力が上昇する",
    },
    {
      name: "基礎スピードアップ",
      description: "基礎スピードが上昇する",
    },
    {
      name: "基礎最大HPアップ",
      description: "基礎最大HPが上昇する",
    },
    // {
    //   name: "バトルルール",
    //   description:
    //     "相手に与えるダメージがターン経過ごとに徐々にアップするようになります\n有利なタイプで攻撃した場合のダメージ増加量が、他のバトルより低くなります",
    // },
    {
      name: "パワーアップ",
      description: 'パワーが<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_001.webp",
    },
    {
      name: "ディフェンスアップ",
      description: 'ディフェンスが<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_002.webp",
    },
    {
      name: "スピードアップ",
      description: 'スピードが<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_003.webp",
    },
    {
      name: "クリティカル率アップ",
      description:
        'クリティカル率が<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_004.webp",
    },
    {
      name: "プルスウルトラゲージ増加",
      description: "プルスウルトラゲージが増加する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_005.webp",
    },
    {
      name: "かばう",
      description: "敵からの単体攻撃が全て自分に向く",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_007.webp",
    },
    {
      name: "挑発",
      description: "敵からの単体攻撃が全て自分に向く",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_007.webp",
    },
    {
      name: "ダメージカット",
      description: 'ダメージを<span style="color:#00f50c;">X</span>%軽減する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_008.webp",
    },
    // {
    //   name: "フェーズダメージカット",
    //   description: "フェーズ移行直前のダメージを無効にする",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_008.webp",
    // },
    {
      name: "回避",
      description: "攻撃を回避する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_009.webp",
    },
    {
      name: "バリア",
      description: "バリアで攻撃を無効化する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_010.webp",
    },
    {
      name: "被ダメージ回復",
      description:
        '受けたダメージの<span style="color:#00f50c;">X</span>%、ターン終了時にHPが回復する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_011.webp",
    },
    {
      name: "高揚",
      description:
        'プルスウルトラゲージ上昇量が<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_012.webp",
    },
    {
      name: "プルスウルトラゲージ上昇量アップ",
      description:
        'プルスウルトラゲージ上昇量が<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_012.webp",
    },
    {
      name: "発勁",
      description:
        '現在値：<span style="color:#00f50c;">X</span>　様々な条件によりカウントが増減し、カウント数値に応じてスキルの効果が変化する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_012.webp",
    },
    {
      name: "くいしばり",
      description: "戦闘不能になっても1度だけHP1で耐える",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_013.webp",
    },
    {
      name: "2回攻撃",
      description: "通常攻撃を2回行う",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_014.webp",
    },
    {
      name: "逆境",
      description: "HPが少なければ少ないほどパワーがアップする",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_015.webp",
    },
    {
      name: "余裕",
      description: "HPが多ければ多いほどパワーがアップする",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_016.webp",
    },
    {
      name: "隠れる",
      description: "敵からの単体攻撃で狙われなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_017.webp",
    },
    {
      name: "カウンター",
      description: "通常攻撃を受けた場合、カウンターを行う",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_018.webp",
    },
    {
      name: "スキル威力アップ",
      description: 'スキル威力が<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_019.webp",
    },
    {
      name: "アクションスキル威力アップ",
      description:
        'アクションスキルの威力が<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_019.webp",
    },
    {
      name: "プルスウルトラ技威力アップ",
      description:
        'プルスウルトラ技の威力が<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_019.webp",
    },
    {
      name: "クールタイム短縮",
      description: "クールタイムが減少する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_020.webp",
    },
    {
      name: "HP自動回復",
      description:
        '毎ターン、HPが<span style="color:#00f50c;">X</span>%回復する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_021.webp",
    },
    {
      name: "状態異常無効",
      description: "悪い状態異常を無効化する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_022.webp",
    },
    // {
    //   name: "パワーダウン完全耐性",
    //   description: "パワーダウン状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "ディフェンスダウン完全耐性",
    //   description: "ディフェンスダウン状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    {
      name: "スピードダウン完全耐性",
      description: "スピードダウン状態にならなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    },
    {
      name: "最大HPダウン完全耐性",
      description: "最大HPダウン状態にならなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    },
    {
      name: "クリティカル率ダウン完全耐性",
      description: "クリティカル率ダウン状態にならなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    },
    // {
    //   name: "クリティカル抵抗ダウン完全耐性",
    //   description: "クリティカル抵抗ダウン状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "スキル威力ダウン完全耐性",
    //   description: "スキル威力ダウン状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "クリティカル威力ダウン完全耐性",
    //   description: "クリティカル威力ダウン状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "アクションスキル威力ダウン完全耐性",
    //   description: "アクションスキル威力ダウン状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "プルスウルトラ技威力ダウン完全耐性",
    //   description: "プルスウルトラ技威力ダウン状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "プルスウルトラゲージ減少完全耐性",
    //   description: "プルスウルトラゲージが減少しなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "スキル封印完全耐性",
    //   description: "スキル封印状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    {
      name: "混乱完全耐性",
      description: "混乱状態にならなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    },
    // {
    //   name: "燃焼完全耐性",
    //   description: "燃焼状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "出血完全耐性",
    //   description: "出血状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    {
      name: "麻痺完全耐性",
      description: "麻痺状態にならなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    },
    // {
    //   name: "拘束完全耐性",
    //   description: "拘束状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "氷結完全耐性",
    //   description: "氷結状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "魅了完全耐性",
    //   description: "魅了状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "暗闇完全耐性",
    //   description: "暗闇状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    {
      name: "恐怖完全耐性",
      description: "恐怖状態にならなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    },
    // {
    //   name: "肉塊完全耐性",
    //   description: "肉塊状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    // {
    //   name: "凍傷完全耐性",
    //   description: "凍傷状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    {
      name: "スタン完全耐性",
      description: "スタン状態にならなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    },
    {
      name: "強化阻害完全耐性",
      description: "強化阻害状態にならなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    },
    // {
    //   name: "回復阻害完全耐性",
    //   description: "回復阻害状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    {
      name: "霜完全耐性",
      description: "霜状態にならなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    },
    // {
    //   name: "熱傷完全耐性",
    //   description: "熱傷状態にならなくなる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_023.webp",
    // },
    {
      name: "最大HPアップ",
      description: '最大HPが<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_024.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に混乱状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に燃焼状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に麻痺状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に氷結状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に肉塊状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に高確率で混乱状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に中確率で混乱状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に低確率で混乱状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に高確率で燃焼状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に中確率で燃焼状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に低確率で燃焼状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に高確率で麻痺状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に中確率で麻痺状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に低確率で麻痺状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に高確率で氷結状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に中確率で氷結状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に低確率で氷結状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に高確率で肉塊状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に中確率で肉塊状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "状態異常カウンター",
      description: "攻撃を受けた時、相手に低確率で肉塊状態を付与",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_025.webp",
    },
    {
      name: "スキル封印耐性アップ",
      description: "スキル封印状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    {
      name: "混乱耐性アップ",
      description: "混乱状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    {
      name: "燃焼耐性アップ",
      description: "燃焼状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    {
      name: "出血耐性アップ",
      description: "出血状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    {
      name: "麻痺耐性アップ",
      description: "麻痺状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    {
      name: "拘束耐性アップ",
      description: "拘束状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    {
      name: "氷結耐性アップ",
      description: "氷結状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    // {
    //   name: "魅了耐性アップ",
    //   description: "魅了状態になる確率を下げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    // },
    {
      name: "暗闇耐性アップ",
      description: "暗闇状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    {
      name: "恐怖耐性アップ",
      description: "恐怖状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    // {
    //   name: "肉塊耐性アップ",
    //   description: "肉塊状態になる確率を下げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    // },
    {
      name: "凍傷耐性アップ",
      description: "凍傷状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    // {
    //   name: "業火耐性アップ",
    //   description: "業火状態になる確率を下げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    // },
    {
      name: "スタン耐性アップ",
      description: "スタン状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    // {
    //   name: "強化阻害耐性アップ",
    //   description: "強化阻害状態になる確率を下げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    // },
    {
      name: "回復阻害耐性アップ",
      description: "回復阻害状態になる確率を下げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    },
    // {
    //   name: "霜耐性アップ",
    //   description: "霜状態になる確率を下げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_026.webp",
    // },
    {
      name: "保護色",
      description:
        "全体攻撃、プルスウルトラ技以外のダメージを与える行動が中確率で当たらなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_027.webp",
    },
    {
      name: "クリティカル威力アップ",
      description:
        'クリティカル発生時の威力が<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_028.webp",
    },
    {
      name: "与ダメージ回復",
      description:
        '与えたダメージの<span style="color:#00f50c;">X</span>%HPが回復する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_029.webp",
    },
    // {
    //   name: "クリティカルダメージ軽減",
    //   description:
    //     'クリティカル発生時のダメージを<span style="color:#00f50c;">X</span>%軽減する',
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_030.webp",
    // },
    {
      name: "スキルダメージ軽減",
      description:
        'スキルダメージを<span style="color:#00f50c;">X</span>%軽減する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_030.webp",
    },
    {
      name: "アクションスキルダメージ軽減",
      description:
        'アクションスキルのダメージを<span style="color:#00f50c;">X</span>%軽減する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_030.webp",
    },
    {
      name: "プルスウルトラ技ダメージ軽減",
      description:
        'プルスウルトラ技のダメージを<span style="color:#00f50c;">X</span>%軽減する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_030.webp",
    },
    {
      name: "通常攻撃威力アップ",
      description:
        '通常攻撃の威力が<span style="color:#00f50c;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_031.webp",
    },
    // {
    //   name: "通常攻撃ダメージ軽減",
    //   description:
    //     '通常攻撃のダメージを<span style="color:#00f50c;">X</span>%軽減する',
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_032.webp",
    // },
    {
      name: "燃焼・出血ダメージ軽減",
      description:
        '燃焼・出血のダメージを<span style="color:#00f50c;">X</span>%軽減する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_033.webp",
    },
    {
      name: "燃焼ダメージ軽減",
      description:
        '燃焼のダメージを<span style="color:#00f50c;">X</span>%軽減する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_033.webp",
    },
    {
      name: "出血ダメージ軽減",
      description:
        '出血のダメージを<span style="color:#00f50c;">X</span>%軽減する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_033.webp",
    },
    // {
    //   name: "凍傷ダメージ軽減",
    //   description:
    //     '凍傷のダメージを<span style="color:#00f50c;">X</span>%軽減する',
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_033.webp",
    // },
    {
      name: "霜ダメージ軽減",
      description:
        '霜のダメージを<span style="color:#00f50c;">X</span>%軽減する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_033.webp",
    },
    {
      name: "不屈",
      description:
        '戦闘不能になってもHP1で耐える　効果終了時に戦闘不能になる　ダメージを与える際、失ったHPの<span style="color:#00f50c;">X</span>%のダメージを追加で与える',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_034.webp",
    },
    {
      name: "圧倒",
      description:
        "自分より一時的な強化効果の数が少ない相手に与えるダメージを1個につき一定値アップする　自分より一時的な強化効果の数が少ない相手から受けるダメージを1個につき一定値軽減する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_035.webp",
    },
    {
      name: "命中率アップ",
      description: "状態異常命中率が増加する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    },
    // {
    //   name: "混乱命中率アップ",
    //   description: "スキル使用時に混乱を付与する確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    // },
    {
      name: "燃焼命中率アップ",
      description: "スキル使用時に燃焼を付与する確率を上げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    },
    {
      name: "出血命中率アップ",
      description: "スキル使用時に出血を付与する確率を上げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    },
    {
      name: "麻痺命中率アップ",
      description: "スキル使用時に麻痺を付与する確率を上げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    },
    {
      name: "拘束命中率アップ",
      description: "スキル使用時に拘束を付与する確率を上げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    },
    {
      name: "氷結命中率アップ",
      description: "スキル使用時に氷結を付与する確率を上げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    },
    // {
    //   name: "魅了命中率アップ",
    //   description: "スキル使用時に魅了を付与する確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    // },
    // {
    //   name: "暗闇命中率アップ",
    //   description: "スキル使用時に暗闇を付与する確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    // },
    {
      name: "恐怖命中率アップ",
      description: "スキル使用時に恐怖を付与する確率を上げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    },
    {
      name: "凍傷命中率アップ",
      description: "スキル使用時に凍傷を付与する確率を上げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    },
    // {
    //   name: "業火命中率アップ",
    //   description: "スキル使用時に業火を付与する確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    // },
    // {
    //   name: "スタン命中率アップ",
    //   description: "スキル使用時にスタンを付与する確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_036.webp",
    // },
    {
      name: "必中",
      description: "攻撃時にミスが発生しなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_037.webp",
    },
    {
      name: "貫通",
      description:
        "バリア、ダメージカット、ディフェンスを無視してダメージを与える",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_038.webp",
    },
    {
      name: "弾性",
      description:
        "自分のスピードがアップしている時、アップしている量に応じて自分の通常攻撃威力とスキル威力とディフェンスをアップする",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_040.webp",
    },
    {
      name: "ストレス",
      description: '現在値：<span style="color:#00f50c;">X</span>',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_041.webp",
    },
    // {
    //   name: "連撃",
    //   description:
    //     'スキル使用時、スキルを<span style="color:#00f50c;">X</span>連続で使用するようになる',
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_042.webp",
    // },
    {
      name: "クリティカル抵抗アップ",
      description:
        'ダメージを受けた時にクリティカルとなる確率が<span style="color:#00f50c;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_043.webp",
    },
    {
      name: "見切り",
      description:
        '通常攻撃とアクションスキルを<span style="color:#00f50c;">X</span>%で回避する　この回避率は自分の一時的な状態異常1個につき5%減少する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_044.webp",
    },
    {
      name: "身軽",
      description:
        "全体攻撃、プルスウルトラ技以外のダメージを与える行動が中確率で当たらなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_045.webp",
    },
    {
      name: "クールタイム軽減",
      description:
        'アクションスキルを使用した時、発生するクールタイムが<span style="color:#00f50c;">X</span>減少する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_046.webp",
    },
    {
      name: "平静",
      description:
        "クリティカルを受けなくなり、攻撃時にクリティカルが発生しなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_047.webp",
    },
    {
      name: "ニトロ",
      description:
        '現在値：<span style="color:#00f50c;">X</span>　様々な条件によりカウントが増減し、カウント数値に応じてスキルの効果が変化する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_048.webp",
    },
    {
      name: "象徴",
      description:
        '現在値：<span style="color:#00f50c;">X</span>　様々な条件によりカウントが増減し、カウント数値に応じてスキルの効果が変化する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_049.webp",
    },
    {
      name: "プルスウルトラ効率アップ",
      description:
        'プルスウルトラ技使用時に消費されるプルスウルトラゲージを<span style="color:#00f50c;">X</span>%軽減する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_050.webp",
    },
    {
      name: "鋭利",
      description:
        "クリティカル抵抗アップによるクリティカル発生率ダウンを無視してダメージを与える",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_051.webp",
    },
    {
      name: "索敵",
      description:
        '自分の単体攻撃が全て隠れる状態の敵に向く　隠れる状態の敵に与えるダメージが<span style="color:#00f50c;">X</span>%アップする',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_052.webp",
    },
    {
      name: "自然体",
      description:
        '貫通によるダメージを受ける時、またはダメージを与える時において、ダメージ軽減無視効果が<span style="color:#00f50c;">X</span>%軽減される',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_053.webp",
    },
    {
      name: "受け流し",
      description:
        'ダメージ割合：<span style="color:#00f50c;">X</span>%\nダメージを受けた時、そのダメージに対して見切りの効果値<span style="color:#00f50c;">X</span>%分のダメージを相手に与える\nこの効果は見切りと同時に付与されている時に効果を発揮する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_054.webp",
    },
    {
      name: "ブロック",
      description:
        '現在値：<span style="color:#00f50c;">X</span>\n現在HPの<span style="color:#00f50c;">X</span>%分を追加HPとして自分に付与し、自分以外の味方が受けるダメージの<span style="color:#00f50c;">50</span>%を肩代わりするようになり、そのバトルでスピードが最も遅くなる。これらの効果は追加HPが無くなった際に解除される',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_055.webp",
    },
    {
      name: "破壊",
      description:
        'HPにダメージを与えた際、対象に与えたダメージ<span style="color:#ff3232;">X</span>%分のHP破壊を付与する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_056.webp",
    },
    {
      name: "エンハンス",
      description:
        "以下の2つの条件を満たした状態でターンを終了した時付与される。プレイキャラのHP・パワー・スピードが上昇し、スキルの効果が変化する。",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_buff_057.webp",
    },
    {
      name: "パワーダウン",
      description: 'パワーが<span style="color:#ff3232;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_001.webp",
    },
    {
      name: "ディフェンスダウン",
      description: 'ディフェンスが<span style="color:#ff3232;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_002.webp",
    },
    {
      name: "スピードダウン",
      description: 'スピードが<span style="color:#ff3232;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_003.webp",
    },
    {
      name: "クリティカル率ダウン",
      description:
        'クリティカル率が<span style="color:#ff3232;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_004.webp",
    },
    {
      name: "プルスウルトラゲージ上昇率ダウン",
      description:
        'プルスウルトラゲージ上昇量が<span style="color:#ff3232;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_005.webp",
    },
    {
      name: "プルスウルトラゲージ減少",
      description: "プルスウルトラゲージが減少する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_005.webp",
    },
    {
      name: "燃焼",
      description: "毎ターン燃焼ダメージを受ける",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_007.webp",
    },
    {
      name: "出血",
      description: "毎ターン出血ダメージを受ける",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_008.webp",
    },
    {
      name: "拘束",
      description: "拘束され　動けなくなる　拘束した相手を倒すと解除される",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_009.webp",
    },
    {
      name: "スキル封印",
      description: "アクションスキル、プルスウルトラ技が使用できなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_010.webp",
    },
    {
      name: "麻痺",
      description: "体が麻痺して動けなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_012.webp",
    },
    {
      name: "疲労",
      description:
        "プルスウルトラゲージをアップする効果や、プルスウルトラゲージ上昇量アップによるゲージ増加効果を受けられなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_013.webp",
    },
    {
      name: "疲労",
      description: "プルスウルトラゲージが上昇しなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_013.webp",
    },
    {
      name: "魅了",
      description: "中確率で通常攻撃をおこなわなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_014.webp",
    },
    {
      name: "暗闇",
      description:
        "プルスウルトラ以外のダメージを与える行動が低確率で当たらなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_015.webp",
    },
    {
      name: "混乱",
      description: "敵と味方の区別がつかなくなり　ランダムに攻撃する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_016.webp",
    },
    {
      name: "氷結",
      description: "凍って動けなくなる　攻撃を受けると解除される",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_017.webp",
    },
    {
      name: "恐怖",
      description: "HPが50％以下の場合高確率で行動できなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_018.webp",
    },
    {
      name: "スキル威力ダウン",
      description: 'スキルの威力が<span style="color:#ff3232;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_019.webp",
    },
    {
      name: "アクションスキル威力ダウン",
      description:
        'アクションスキルの威力が<span style="color:#ff3232;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_019.webp",
    },
    {
      name: "プルスウルトラ技威力ダウン",
      description:
        'プルスウルトラ技の威力が<span style="color:#ff3232;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_019.webp",
    },
    {
      name: "クールタイム延長",
      description: "クールタイムが増加する",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_020.webp",
    },
    {
      name: "肉塊",
      description:
        "肉塊になり動けなくなる　スピードが付与した相手より低いと肉塊になりやすい　相手を倒すか行動不能にすると解除",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_021.webp",
    },
    {
      name: "最大HPダウン",
      description: '最大HPが<span style="color:#ff3232;">X</span>%ダウン',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_022.webp",
    },
    // {
    //   name: "スキル封印耐性ダウン",
    //   description: "スキル封印状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    {
      name: "混乱耐性ダウン",
      description: "混乱状態になる確率を上げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    },
    {
      name: "燃焼耐性ダウン",
      description: "燃焼状態になる確率を上げる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    },
    // {
    //   name: "出血耐性ダウン",
    //   description: "出血状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "麻痺耐性ダウン",
    //   description: "麻痺状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "拘束耐性ダウン",
    //   description: "拘束状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "氷結耐性ダウン",
    //   description: "氷結状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "魅了耐性ダウン",
    //   description: "魅了状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "暗闇耐性ダウン",
    //   description: "暗闇状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "恐怖耐性ダウン",
    //   description: "恐怖状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "肉塊耐性ダウン",
    //   description: "肉塊状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "凍傷耐性ダウン",
    //   description: "凍傷状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "強化阻害耐性ダウン",
    //   description: "強化阻害状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    // {
    //   name: "霜耐性ダウン",
    //   description: "霜状態になる確率を上げる",
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_023.webp",
    // },
    {
      name: "凍傷",
      description:
        'スキルチェインに参加できなくなり、与えたダメージの<span style="color:#ff3232;">X</span>%を自分も受けるようになる',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_024.webp",
    },
    {
      name: "スタン",
      description: "気絶して動けなくなる　クリティカル発生時スタンになりやすい",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_025.webp",
    },
    {
      name: "クリティカル抵抗ダウン",
      description:
        'ダメージを受けた時にクリティカルとなる確率が<span style="color:#ff3232;">X</span>%アップ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_026.webp",
    },
    // {
    //   name: "クリティカル威力ダウン",
    //   description:
    //     'クリティカル発生時の威力が<span style="color:#ff3232;">X</span>%ダウン',
    //   iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_027.webp",
    // },
    {
      name: "強化阻害",
      description: "一時的な強化を受けられなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_028.webp",
    },
    {
      name: "回復阻害",
      description: "回復を受けられなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_029.webp",
    },
    {
      name: "クールタイム増加",
      description:
        'アクションスキルを使用した時、発生するクールタイムが<span style="color:#ff3232;">X</span>増加する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_030.webp",
    },
    {
      name: "霜",
      description:
        '現在値：<span style="color:#ff3232;">X</span>\n付与されている霜1個につき、与えたダメージの1%を自分も受けるようになり、クリティカル攻撃を受けた時に両隣のキャラに霜が1個伝播し付与される\n凍傷中は霜によって受けるダメージが2倍になり、氷結中は付与される霜の個数が2倍になる',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_031.webp",
    },
    {
      name: "熱傷",
      description:
        '燃焼を熱傷に変換する　受けるダメージが<span style="color:#ff3232;">X</span>%増加し、回復・最大HPアップの効果が<span style="color:#ff3232;">X</span>%減少する',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_032.webp",
    },
    {
      name: "状態異常回復阻害",
      description: "一時的な状態異常の回復を受けられなくなる",
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_033.webp",
    },
    {
      name: "衰弱",
      description:
        '現在値：<span style="color:#ff3232;">X</span>%(最大50%)\n与えるダメージが減少し、受けるダメージが増加する。この効果は自分の一時的な状態異常の数によって増加',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_034.webp",
    },
    {
      name: "HP破壊",
      description:
        '現在値：<span style="color:#ff3232;">X</span>(最大HPの<span style="color:#ff3232;">X</span>%)\nHP回復・解除することができない特殊ダメージ',
      iconUrl: "/assets/buffs_debuffs/battle_status_icon_debuff_035.webp",
    },
  ],
};
