import { HStack, IconButton, useDisclosure } from '@chakra-ui/react';

// Hooks
import { useBreakpoints } from '@shared/hooks';

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
  const { isLargeThan1024, isLargeThan768 } = useBreakpoints();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack w="full" justifyContent="space-between" bg="light.300" p={7.5}>
      <HStack>
        {!isLargeThan1024 && (
          <IconButton
            variant="default"
            aria-label="show-sidebar"
            icon={<MenuIcon />}
          />
        )}
        {isLargeThan768 && (
          <SearchBar
            placeholder="Search here..."
            leftContent={<SearchIcon />}
            onChange={onSearch}
          />
        )}
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
