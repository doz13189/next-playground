import type { Dispatch, FC, SetStateAction } from "react";
import { Input } from "../../_parts/Field";

export const MemoryNameForm: FC<{
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}> = ({ name, setName }) => {
  return <Input setValue={setName} value={name} label="メモリー名" />;
};
