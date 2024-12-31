import { css } from "@/styled-system/css";
import { Flex } from "@/styled-system/jsx";
import { ark } from "@ark-ui/react";

export const Loading = () => {
  return (
    <Flex className={css({ my: 5, alignItems: "center", justifyContent: "center" })}>
      <ark.p>Loading...</ark.p>
      <ark.img
        src="/man-superhero-svgrepo-com.svg"
        alt="Superman Icon"
        width={30}
        height={30}
      />
    </Flex>
  );
};
