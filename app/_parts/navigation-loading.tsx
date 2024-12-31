import { css } from "@/styled-system/css";
import { ark } from "@ark-ui/react";
import { Spinner } from "./spinner";

export const NavigationLoading = () => {
  return (
    <ark.div className={css({
      position: "fixed",
      inset: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      zIndex: 999
    })}>
      <ark.div className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2',
        backgroundColor: 'white',
        padding: '4',
        borderRadius: 'lg',
        boxShadow: 'lg'
      })}>
        <Spinner />
      </ark.div>
    </ark.div>
  );
};
