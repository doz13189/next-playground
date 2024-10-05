import { Select as ArkSelect, ark } from "@ark-ui/react";
import type { Dispatch, SetStateAction } from "react";

type Item = {
  label: string;
  value: string;
};

type Props = ArkSelect.RootProps<Item> & {
  label: string;
  placeholderText: string;
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
  isMultiple?: boolean;
};

export const Select = ({ isMultiple = false, ...props }: Props) => {
  const { items, label, placeholderText, value, setValue } = props;

  return (
    <ArkSelect.Root
      {...props}
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
        <ArkSelect.Trigger className="appearance-none inline-flex items-center justify-between w-full px-3 py-2 bg-white border-2 border-grey rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <ArkSelect.ValueText
            placeholder={placeholderText}
            className="text-gray"
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
              <ark.path d="m6 9 6 6 6-6" />
            </ark.svg>
          </ArkSelect.Indicator>
        </ArkSelect.Trigger>
      </ArkSelect.Control>
      <ArkSelect.Positioner>
        <ArkSelect.Content className="bg-white border-2 border-gray rounded-lg shadow-lg z-50 animate-fadeIn">
          <ArkSelect.ItemGroup>
            {items.map((item) => (
              <ArkSelect.Item
                key={item.value}
                item={item}
                className="flex items-center justify-between px-2 py-2 text-sm cursor-pointer transition-colors duration-150 hover:bg-gray-100 rounded-md"
              >
                <ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
                <ArkSelect.ItemIndicator>
                  <ark.svg
                    className={"w-4 h-4"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ark.polyline points="20 6 9 17 4 12"></ark.polyline>
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
