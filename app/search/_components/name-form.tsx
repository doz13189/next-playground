import { Name } from "@/app/_data/_common/schema";
import { Dispatch, FC, SetStateAction } from "react";
import { Select } from "../_parts/Select";

export const NameForm: FC<{ name: string ,setName: Dispatch<SetStateAction<string>>; }> = ({
	name,
	setName,
}) => {
	return (
		<Select
			items={Name.options.map((name) => ({ label: name, value: name }))}
			label="キャラクター名"
			placeholderText={"キャラクター名を選んでください"}
			value={[name]}
			// @ts-ignore
			setValue={(values: string[]) => {
				values.length > 0 && setName(values[0])
			}}
			isMultiple={false}
		/>
	);
};