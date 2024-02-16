import { HStack, IconButton, Show, useDisclosure } from '@chakra-ui/react';

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
  const { lg } = breakpoints || {};
  const { isOpen, onOpen, onClose } = useDisclosure() || {};

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      bg="light.300"
      p={{ sm: 5, md: 7.5 }}>
      <HStack>
        <Show below={`${lg}px`}>
          <IconButton
            variant="default"
            aria-label="show-sidebar"
            icon={<MenuIcon />}
          />
        </Show>
        <SearchBar
          placeholder="Search here..."
          leftContent={<SearchIcon />}
          onChange={onSearch}
        />
      </HStack>
      <HStack spacing={{ sm: 2, md: 7.5 }}>
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
  );
};

export default Header;
