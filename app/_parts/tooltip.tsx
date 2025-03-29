"use client"

import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip'

const InnerContent = styled(
  ArkTooltip.Content,
  cva({
    base: {
      background: 'grey',
      borderRadius: 'l2',
      boxShadow: 'sm',
      color: 'secondary',
      fontWeight: 'semibold',
      px: '3',
      py: '2',
      textStyle: 'xs',
      maxWidth: '2xs',
      zIndex: 'tooltip',
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
    },
  }),
)

export const Tooltip = ({ children }: { children: React.ReactNode }) => (
  <ArkTooltip.Root>
    <ArkTooltip.Trigger>{children}</ArkTooltip.Trigger>
    <ArkTooltip.Positioner>
      <InnerContent>
        <ArkTooltip.Arrow>
          <ArkTooltip.ArrowTip />
        </ArkTooltip.Arrow>
        I am a tooltip!
      </InnerContent>
    </ArkTooltip.Positioner>
  </ArkTooltip.Root>
)
