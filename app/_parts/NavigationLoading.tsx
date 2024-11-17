import { ark } from "@ark-ui/react";
import { Spinner } from "./Spinner";

export const NavigationLoading = () => {
  return (
    <ark.div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <ark.div className="flex items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-lg">
        <Spinner />
      </ark.div>
    </ark.div>
  );
};
