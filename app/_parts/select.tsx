import { css } from "@/styled-system/css";
import { Box, Spacer } from "@/styled-system/jsx";
import { Select as ArkSelect, ark } from "@ark-ui/react";
import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Button } from "./button";

type Item = {
  label: string;
  value: string;
};

type Props = ArkSelect.RootProps<Item> & {
  label: string;
  placeholdertext: string;
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
  isMultiple?: boolean;
};

export const Select = ({
  label,
  placeholdertext,
  value,
  setValue,
  isMultiple = false,
  ...props }: Props) => {
  const { items } = props;
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleDone = () => {
    setIsOpen(false);
  };

  return (
    <ArkSelect.Root
      {...props}
      open={isOpen}
      closeOnSelect={false}
      onOpenChange={({ open }) => { setIsOpen(open) }}
      positioning={{
        flip: false,
        sameWidth: true,
      }}
      multiple={isMultiple}
      items={items}
      value={value}
      onValueChange={(items) => {
        setValue(items.value);
      }}
    >
      <ArkSelect.Label>{label}</ArkSelect.Label>
      <ArkSelect.Control>
        <ArkSelect.Trigger
          className={css({
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
          })}
          onClick={handleOpen}
        >
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


      {isOpen && (
        <Box
          className={css({
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "50",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          })}
        >
          <Box
            ref={pickerRef}
            className={css({
              width: "full",
              height: "80vh",
              bg: "white",
              borderTopRadius: "xl",
              boxShadow: "lg",
              animation: "slide-in 0.3s ease-out",
              display: "flex",
              flexDirection: "column",
            })}
          >
            <Box className={css({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: "1px",
              borderColor: "gray.200",
              p: "3",
            })}>
              <Spacer />
              <Button
                onClick={handleDone}
              >
                完了
              </Button>
            </Box>

            <Box className={css({
              position: "relative",
              color: "gray.800",
              overflow: "hidden",
              flex: "1",
              display: "flex",
              flexDirection: "column",
            })}>

              <Box
                className={css({
                  height: "70vh",
                  overflowY: "auto",
                  position: "relative",
                  zIndex: "2",
                  display: "flex",
                  flexDirection: "column",
                })}
              >
                <ArkSelect.ItemGroup className={css({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                })}>
                  {items.map((item) => (
                    <ArkSelect.Item
                      key={item.value}
                      item={item}
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: "relative",
                        height: "48px",
                        fontSize: 'lg',
                        fontWeight: "medium",
                        cursor: 'pointer',
                        transition: 'all',
                        transitionDuration: '150ms',
                        borderBottomWidth: "1px",
                        borderColor: "gray.200",
                        backgroundColor: "white",
                        '&[data-selected]': {
                          color: "blue.500",
                          backgroundColor: "gray.50",
                        },
                        '&:hover': {
                          backgroundColor: "gray.50"
                        },
                        '&:focus': {
                          outline: "none",
                          backgroundColor: "gray.100"
                        }
                      })}
                    >
                      <ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
                      <ArkSelect.ItemIndicator
                        className={css({
                          position: "absolute",
                          right: "16px",
                        })}>
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
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </ArkSelect.Root>
  );
};