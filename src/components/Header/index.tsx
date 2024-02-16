import {
  HStack,
  IconButton,
  Show,
  VStack,
  useDisclosure
} from '@chakra-ui/react';

// Themes
import { breakpoints } from '@shared/themes/bases';

// Svg
import {
  MenuIcon,
  MessageIcon,
  NotificationIcon,
  SearchIcon
} from '@shared/SVG';

// Components
import { Dropdown, SearchBar } from '@shared/components';

interface HeaderProps {
  fullName?: string;
  onSearch: (value: string) => void;
}

const Header = ({ fullName, onSearch }: HeaderProps) => {
  const { md, lg } = breakpoints || {};
  const { isOpen, onOpen, onClose } = useDisclosure() || {};

  return (
    <VStack p={{ base: 5, md: 7.5 }} bg="light.300">
      <HStack w="full" justifyContent="space-between">
        <HStack>
          <Show below={`${lg}px`}>
            <IconButton
              variant="default"
              aria-label="show-sidebar"
              icon={<MenuIcon />}
            />
          </Show>
          <Show above={`${md}px`}>
            <SearchBar
              placeholder="Search here..."
              leftContent={<SearchIcon />}
              onChange={onSearch}
            />
          </Show>
        </HStack>
        <HStack spacing={{ base: 2, md: 7.5 }}>
          <NotificationIcon />
          <MessageIcon />
          <Dropdown
            fullName={fullName}
            isOpen={isOpen}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          />
        </HStack>
      </HStack>
      <Show below={`${md}px`}>
        <SearchBar
          placeholder="Search here..."
          leftContent={<SearchIcon />}
          onChange={onSearch}
        />
      </Show>
    </VStack>
  );
};

export default Header;
