import Link from "next/link";
import type { FC } from "react";
import type { z } from "zod";
import type { MessageSchema } from "../_data/message/schema";
import { queryMessage } from "../_lib/query/message";
import { SendByServerActions } from "./_components/send-by-server-actions";

const MessageDetail: FC<{ message: z.infer<typeof MessageSchema> }> = ({
  message,
}) => {
  return (
    <div>
      <div>{message.created}</div>
      <div>{message.name}</div>
      <div>{message.message}</div>
    </div>
  );
};

const Messages: FC = () => {
  const response = queryMessage();
  return response
    .then((messages) => {
      const message = messages.messages;
      if (!message) {
        return <>No Data</>;
      }

      if (message.length === 0) {
        return <>No Data</>;
      }

      return message.map((value) => <MessageDetail message={value} />);
    })
    .catch((err) => {
      console.error(err);
      return <>No Data</>;
    });
};

export default async function Message() {
  return (
    <main className="py-1 px-3">
      <div className="mb-3">
        {/* <SendByApi /> */}
        <SendByServerActions />
      </div>

      <Messages />

      <div className="fixed bottom-3 left-1">
        <Link
          href={"/search/character"}
          className="
						my-1
						mx-1
						px-4
						py-1
						text-sm
						bg-yellow
						border-2
						border-grey
						rounded-lg
					"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
