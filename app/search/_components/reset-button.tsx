"use client";

import { FC, SetStateAction } from "react";

export const ResetButton: FC<{
	setRarity: (value: SetStateAction<string>) => void,
	setSkills: (value: SetStateAction<string[]>) => void,
	setType?: (value: SetStateAction<string>) => void,
	setName?: (value: SetStateAction<string>) => void,
	setTags?: (value: SetStateAction<string>) => void,
}> = ({
	setRarity,
	setSkills,
	setType,
	setName,
	setTags
}) => {
	return (
		<button
			type="submit"
			className="
		my-1
		mx-1
		px-4
		py-1
		w-32
		text-sm
		bg-yellow
		border-2
		border-grey
		rounded-lg	
	"
			onClick={() => {
				setRarity("");
				setSkills([]);
				setType && setType("");
				setName && setName("");
				setTags && setTags("");
			}}
		>
			リセット
		</button>
	);
};
