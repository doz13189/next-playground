import { Type } from "@/app/_data/_common/schema";
import { Dispatch, FC, SetStateAction } from "react";
import { getTypeLabel } from "../_lib/utils";
import { Select } from "../_parts/Select";

export const TypeForm: FC<{ type: string, setType: Dispatch<SetStateAction<string>>; }> = ({
	type,
	setType,
}) => {
	return (
		<Select
			items={Type.options.map((type) => ({ label: getTypeLabel(type), value: type }))}
			label="タイプ"
			placeholderText={"タイプを選んでください"}
			value={[type]}
			// @ts-ignore
			setValue={(values: string[]) => {
				values.length > 0 && setType(values[0])
			}}
			isMultiple={false}
		/>
	);
};