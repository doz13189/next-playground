import { Suspense } from "react";
import { NewCharacter } from "./_components/new-character";
import { NewMemory } from "./_components/new-memory";
import { Loading } from "../search/_components/Loading";

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto py-1 px-3">

			<div className="py-2">
				<p className="text-orange">お知らせ</p>
				<div className="
					mt-1
					p-1
					bg-very-light-gray
					rounded-lg
				">
					<p className="text-xs">{`以下のデータ追加に伴うアップデートを実施しました。`}</p>
					{["1194004"].map((id) => (
						<div key={id} className="m-2">
							<Suspense fallback={<Loading />}>
								<NewCharacter key={id} id={id} />
							</Suspense>
						</div>
					))}
					{["2400147", "2300200", "2300201"].map((id) => (
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

				<div className="
					text-xs
					mt-1
					p-1
					bg-very-light-gray
					rounded-lg
				">{"僕のヒーローアカデミア ULTRA IMPACT(ヒロトラ)のプレイキャラ/メモリーを検索することができる非公式サービスです。また、リーク情報は扱いません。"}
				</div>
			</div>
		</div>

	);
}