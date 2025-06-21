import { Box } from "@/styled-system/jsx";
import { Suspense } from "react";
import { MainLayout } from "../_components/main-layout";
import { Heading } from "../_parts/heading";
import { Skeleton } from "../_parts/skeleton";
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
        {["1103015", "1148004"].map((id) => (
          <Box key={id} marginY={"2"}>
            <Suspense fallback={
              <Skeleton>
                <Box height={"48px"} margin={"1"} paddingY={"2"} />
              </Skeleton>}
            >
              <NewCharacter key={id} id={id} />
            </Suspense>
          </Box>
        ))}
        {["2400178", "2300235", "2300236"].map((id) => (
          <Box key={id} marginY={"2"}>
            <Suspense fallback={
              <Skeleton>
                <Box height={"48px"} margin={"1"} paddingY={"2"} />
              </Skeleton>
            }>
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
