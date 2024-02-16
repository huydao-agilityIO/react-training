import { ChangeEvent, ReactNode, memo, useCallback } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react';

interface SearchBarProps {
  placeholder?: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  onChange: (value: string) => void;
}

const SearchBar = ({
  placeholder = '',
  leftContent = '',
  rightContent = '',
  onChange
}: SearchBarProps) => {
  /**
   * The function handles change value search bar
   */
  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value;

      value && onChange(value);
    },
    [onChange]
  );

  return (
    <InputGroup alignItems="center" size="md" w="full">
      {leftContent && (
        <InputLeftElement h="full" w={20} paddingLeft={10}>
          {leftContent}
        </InputLeftElement>
      )}
      <Input
        type="text"
        placeholder={placeholder}
        borderRadius="4xl"
        bg="light.350"
        paddingLeft={leftContent ? 20 : 10}
        paddingRight={rightContent ? 20 : 10}
        h={55}
        onChange={handleChangeValue}
      />
      {rightContent && (
        <InputRightElement h="full" w={20} paddingRight={10}>
          {rightContent}
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default memo(SearchBar);
