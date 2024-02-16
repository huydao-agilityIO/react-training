import { HStack, IconButton, Show, useDisclosure } from '@chakra-ui/react';

// Constants
import { breakpoints } from '@shared/constants';

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
    <HStack w="full" justifyContent="space-between" bg="light.300" p={7.5}>
      <HStack>
        <Show below={lg}>
          <IconButton
            variant="default"
            aria-label="show-sidebar"
            icon={<MenuIcon />}
          />
        </Show>
        <Show above={md}>
          <SearchBar
            placeholder="Search here..."
            leftContent={<SearchIcon />}
            onChange={onSearch}
          />
        </Show>
      </HStack>
      <HStack spacing={7.5}>
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
