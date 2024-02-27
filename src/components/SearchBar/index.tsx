import { ChangeEventHandler, ReactNode, memo } from 'react';
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
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = ({
  placeholder = '',
  leftContent = '',
  rightContent = '',
  onChange
}: SearchBarProps) => {
  return (
    <InputGroup alignItems="center" size="md" w="full">
      {leftContent && (
        <InputLeftElement
          h="full"
          w={{ base: 8, md: 20 }}
          paddingLeft={{ base: 4, md: 10 }}>
          {leftContent}
        </InputLeftElement>
      )}
      <Input
        type="text"
        placeholder={placeholder}
        borderRadius="4xl"
        bg="light.350"
        paddingLeft={leftContent ? { base: 10, md: 20 } : 10}
        paddingRight={rightContent ? { base: 10, md: 20 } : 10}
        h={55}
        onChange={onChange}
      />
      {rightContent && (
        <InputRightElement
          h="full"
          w={{ base: 8, md: 20 }}
          paddingRight={{ base: 4, md: 10 }}>
          {rightContent}
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default memo(SearchBar);
