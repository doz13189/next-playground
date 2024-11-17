import { ark } from "@ark-ui/react";

export const Loading = () => {
  return (
    <ark.div className="my-5 flex items-center justify-center">
      <ark.p>Loading...</ark.p>
      <ark.img
        src="/man-superhero-svgrepo-com.svg"
        alt="Superman Icon"
        width={30}
        height={30}
      />
    </ark.div>
  );
};
