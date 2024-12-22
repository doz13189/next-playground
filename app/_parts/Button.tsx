import { css, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { ark } from "@ark-ui/react";
import { type ButtonHTMLAttributes, type ComponentProps, forwardRef } from 'react'
import { Spinner } from './Spinner'

const buttonStyle = cva({
  base: {
    fontSize: { base: "3", sm: "3", md: "3", lg: "3.5" },
    fontWeight: "bold",
    height: "6",
    width: "20",
    textAlign: "center",
    color: "secondary",
    borderRadius: "6px",
    backgroundColor: "primary",
  },
  variants: {
    disabled: {
      true: {
        color: "grey",
        backgroundColor: "grey.80",
      },
      false: {
        color: "secondary",
        backgroundColor: "primary",
      }
    }
  },
})

const InnerButton = styled(ark.button, buttonStyle)

type ButtonLoadingProps = {
  loading?: boolean
  children: React.ReactNode
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ComponentProps<typeof InnerButton> & ButtonLoadingProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { loading, disabled, children, ...rest } = props

  const trulyDisabled = loading || disabled

  return (
    <InnerButton disabled={trulyDisabled} ref={ref} {...rest}>
      {loading ? (
        <ButtonSpinner />
      ) : (
        children
      )}
    </InnerButton>
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
