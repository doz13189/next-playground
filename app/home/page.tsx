import { Box } from "@/styled-system/jsx";
import { Suspense } from "react";
import { MainLayout } from "../_components/main-layout";
import { Heading } from "../_parts/heading";
import { Loading } from "../_parts/loading";
import { Typography } from "../_parts/typography";
import { NewCharacter } from "./_components/new-character";
import { NewMemory } from "./_components/new-memory";
import { Survey } from "./_components/survey";

export default function Page() {
  return (
    <Box>
      <MainLayout >
        <Box marginBottom={"2"}>
          <Heading>お知らせ</Heading>
        </Box>
        <Typography>以下のデータ追加に伴うアップデートを実施しました。</Typography>
        {["1113011", "1111011"].map((id) => (
          <Box key={id} marginY={"2"}>
            <Suspense fallback={<Loading />}>
              <NewCharacter key={id} id={id} />
            </Suspense>
          </Box>
        ))}
        {["2400163", "2300215", "2300216"].map((id) => (
          <Box key={id} marginY={"2"}>
            <Suspense fallback={<Loading />}>
              <NewMemory key={id} id={id} />
            </Suspense>
          </Box>
        ))}
      </MainLayout>


      <MainLayout>
        <Box marginBottom={"2"}>
          <Heading>このサービスについて</Heading>
        </Box>
        <Typography>僕のヒーローアカデミア ULTRA IMPACT(ヒロトラ)のプレイキャラ/メモリーを検索することができる非公式サービスです。また、リーク情報は扱いません。</Typography>
      </MainLayout>

      <MainLayout>
        <Box marginBottom={"2"}>
          <Heading>アンケート</Heading>
        </Box>
        <Survey />
      </MainLayout>
    </Box>
  );
}
