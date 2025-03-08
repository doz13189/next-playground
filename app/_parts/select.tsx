import { css } from "@/styled-system/css";
import { Select as ArkSelect, ark } from "@ark-ui/react";
import type { Dispatch, SetStateAction } from "react";

type Props<T> = ArkSelect.RootProps<T> & {
  label: string;
  placeholdertext: string;
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
  isMultiple?: boolean;
};

export const Select = <T extends Record<string, string>>({
  label,
  placeholdertext,
  value,
  setValue,
  isMultiple = false,
  ...props }: Props<T>) => {
  const { collection } = props;

  return (
    <ArkSelect.Root
      {...props}
      positioning={{
        flip: false,
        sameWidth: true,
      }}
      multiple={isMultiple}
      collection={collection}
      value={value}
      onValueChange={(items) => {
        setValue(items.value);
      }}
    >
      <ArkSelect.Label>{label}</ArkSelect.Label>
      <ArkSelect.Control>
        <ArkSelect.Trigger className={css({
          appearance: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          px: '3',
          py: '2',
          bg: 'white',
          borderWidth: "1px",
          borderColor: "tertiary",
          borderRadius: 'lg',
          cursor: 'pointer',
          transition: 'all',
          transitionDuration: '200ms',
          '&:hover': {
            bg: 'gray.50'
          },
          '&:focus': {
            outline: 'none',
            ring: '2',
            ringColor: 'blue.500',
            borderColor: 'blue.500'
          }
        })}>
          <ArkSelect.ValueText
            placeholder={placeholdertext}
          />
          <ArkSelect.Indicator>
            <ark.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>{label}</title>
              <ark.path d="m6 9 6 6 6-6" />
            </ark.svg>
          </ArkSelect.Indicator>
        </ArkSelect.Trigger>
      </ArkSelect.Control>
      <ArkSelect.Positioner>
        <ArkSelect.Content className={css({
          bg: 'white',
          borderWidth: '1px',
          borderColor: "tertiary",
          borderRadius: 'lg',
          boxShadow: 'lg',
          zIndex: '50',
          animation: 'fadeIn'
        })}>
          <ArkSelect.ItemGroup>
            {collection?.items.map((item) => (
              <ArkSelect.Item
                key={item.value}
                item={item}
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: '2',
                  py: '2',
                  fontSize: 'sm',
                  cursor: 'pointer',
                  transition: 'colors',
                  transitionDuration: '150ms',
                  borderRadius: 'md',
                  '&:hover': {
                    bg: 'gray.100'
                  }
                })}
              >
                <ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
                <ArkSelect.ItemIndicator>
                  <ark.svg
                    className={css({
                      width: '4',
                      height: '4'
                    })}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>{item.label}</title>
                    <ark.polyline points="20 6 9 17 4 12" />
                  </ark.svg>
                </ArkSelect.ItemIndicator>
              </ArkSelect.Item>
            ))}
          </ArkSelect.ItemGroup>
        </ArkSelect.Content>
      </ArkSelect.Positioner>
    </ArkSelect.Root>
  );
};
