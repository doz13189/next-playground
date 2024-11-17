import { ark } from "@ark-ui/react";
import { type ComponentProps, forwardRef } from 'react'
import { Spinner } from './Spinner'

type ButtonLoadingProps = {
  loading?: boolean
  children: React.ReactNode
}

type ButtonProps = ComponentProps<typeof ark.button> & ButtonLoadingProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { loading, disabled, children, ...rest } = props

  const trulyDisabled = loading || disabled

  return (
    <ark.button disabled={trulyDisabled} ref={ref} {...rest}>
      {loading ? (
        <ButtonSpinner />
      ) : (
        children
      )}
    </ark.button>
  )
})

const ButtonSpinner = () => (
  <ark.div className="flex justify-center items-center w-full h-full">
    <Spinner />
  </ark.div>
)
