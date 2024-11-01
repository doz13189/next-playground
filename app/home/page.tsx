import { Suspense } from "react";
import { Loading } from "../search/_components/Loading";
import { Survey } from "./_components/Survey";
import { NewCharacter } from "./_components/new-character";
import { NewMemory } from "./_components/new-memory";

const ENABLE_SURVEY = false;
export default function Page() {
  return (
    <div className="min-h-screen container mx-auto py-1 px-3">
      <div className="py-2">
        <p className="text-orange">お知らせ</p>
        <div
          className="
					mt-1
					p-1
					bg-very-light-gray
					rounded-lg
				"
        >
          <p className="text-xs">
            以下のデータ追加に伴うアップデートを実施しました。
          </p>
          {["1105015"].map((id) => (
            <div key={id} className="m-2">
              <Suspense fallback={<Loading />}>
                <NewCharacter key={id} id={id} />
              </Suspense>
            </div>
          ))}
          {["2300207", "2300206", "2400153"].map((id) => (
            <div key={id} className="m-2">
              <Suspense fallback={<Loading />}>
                <NewMemory key={id} id={id} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>

      <div className="py-2">
        <p className="text-orange">このサービスについて</p>

        <div
          className="
					text-xs
					mt-1
					p-1
					bg-very-light-gray
					rounded-lg
				"
        >
          {
            "僕のヒーローアカデミア ULTRA IMPACT(ヒロトラ)のプレイキャラ/メモリーを検索することができる非公式サービスです。また、リーク情報は扱いません。"
          }
        </div>
      </div>

      {ENABLE_SURVEY && (
        <div className="py-2">
          <p className="text-orange">アンケート</p>
          <div
            className="
					text-xs
					mt-1
					p-1
					bg-very-light-gray
					rounded-lg
				"
          >
            <Survey />
          </div>
        </div>
      )}
    </div>
  );
}
