"use server";

import { writeMessage } from "@/app/_lib/apiHandler/message";
import { SendButton } from "./send-button";

export const handleOnClick = () => {
	writeMessage("Hello, World!");
};

export const SendByApi = () => {
	return (
		<form className="w-full max-w-sm">
			<div className="flex items-center border-b border-teal-500 py-2">
				<input
					className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					placeholder="sample"
					aria-label="Full name"
				/>
				<SendButton handleOnClick={handleOnClick} />
				<button
					className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
					type="button"
				>
					Cancel
				</button>
			</div>
		</form>
	);
};
