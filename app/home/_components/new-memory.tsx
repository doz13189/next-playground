import { queryMemory } from "@/app/_lib/query/memory";
import { getImageNameByRarity } from "@/app/search/_lib/utils";
import Image from "next/image";
import Link from "next/link";

export async function NewMemory({
  id,
}: {
  id: string;
}) {
  const memory = await queryMemory(id);
  return (
    <Link href={`/search/memory/result/${memory.id}`}>
      <div className="flex">
        <div className="relative w-12 h-12">
          <Image
            src={`/bg/chara_bg_10${getImageNameByRarity(memory.rarity)}.webp`}
            width={50}
            height={50}
            alt="memory icon"
            className="absolute top-0 left-0"
          />
          <Image
            src={`/memory-icon/icon_m_${memory.id}.webp`}
            width={50}
            height={50}
            alt="memory icon"
            className="absolute top-0 left-0"
          />
          <Image
            src={`/frame/chara_frame_10${getImageNameByRarity(memory.rarity)}.webp`}
            width={50}
            height={50}
            alt="memory icon"
            className="absolute top-0 left-0"
          />
          <Image
            src={`/rarity/card_rarity_0${getImageNameByRarity(memory.rarity)}.webp`}
            width={20}
            height={20}
            alt="memory icon"
            className="absolute top-0 left-0"
          />
        </div>
        <div className="content-center mx-3">{`${memory.name}`}</div>
      </div>
    </Link>
  );
}
