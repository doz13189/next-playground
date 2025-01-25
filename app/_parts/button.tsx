import { css, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { ark } from "@ark-ui/react";
import { type ButtonHTMLAttributes, type ComponentProps, forwardRef } from 'react'
import { buttonRecipe } from "./recipes/button";
import { Spinner } from "./spinner"

const BaseButton = styled(ark.button, buttonRecipe)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ComponentProps<typeof BaseButton> & {
  loading?: boolean
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { loading, disabled, children, ...rest } = props

  const trulyDisabled = loading || disabled

  return (
    <BaseButton
      disabled={trulyDisabled}
      ref={ref}
      {...rest}
    >
      {loading ? (
        <ButtonSpinner />
      ) : (
        children
      )}
    </BaseButton>
  )
})

const ButtonSpinner = () => (
  <ark.div
    className={css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    })}
  >
    <Spinner />
  </ark.div>
)
