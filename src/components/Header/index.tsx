import { ChangeEventHandler } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Show,
  VStack,
  useDisclosure
} from '@chakra-ui/react';

// Images
import urlBrand from '@shared/assets/images/brand.png';

// Themes
import { breakpoints } from '@shared/themes/bases';

// Constants
import { SIDEBAR_MAPPING } from '@shared/constants';

// Svg
import {
  MenuIcon,
  MessageIcon,
  NotificationIcon,
  SearchIcon
} from '@shared/SVG';

// Components
import { Dropdown, SearchBar, Sidebar } from '@shared/components';
import { useAuth } from '@shared/hooks';
import { formatFullName } from '@shared/utils';
import { ACTION } from '@shared/types';

interface HeaderProps {
  onSearch: ChangeEventHandler<HTMLInputElement>;
}

const Header = ({ onSearch }: HeaderProps) => {
  const { md, lg } = breakpoints || {};
  const { state, dispatch } = useAuth();
  const { firstName, lastName } = state.auth;
  const {
    isOpen: isOpenDropdown,
    onOpen: onOpenDropdown,
    onClose: onCloseDropdown
  } = useDisclosure() || {};
  const {
    isOpen: isOpenSideBar,
    onOpen: onOpenSideBar,
    onClose: onCloseSideBar
  } = useDisclosure() || {};

  const handleLogOut = () =>
    dispatch({
      type: ACTION.LOG_OUT,
      payload: { ...state.auth, isAuth: false }
    });

  return (
    <VStack p={{ base: 5, md: 7.5 }} bg="light.300">
      <HStack w="full" justifyContent="space-between">
        <HStack>
          <Show below={`${lg}px`}>
            <IconButton
              variant="default"
              aria-label="show-sidebar"
              icon={<MenuIcon />}
              onClick={onOpenSideBar}
            />
            <Drawer
              isOpen={isOpenSideBar}
              placement="left"
              onClose={onCloseSideBar}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <Sidebar
                    sidebarMapping={SIDEBAR_MAPPING}
                    urlBrand={urlBrand}
                  />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
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
            fullName={formatFullName(firstName, lastName)}
            isOpen={isOpenDropdown}
            onOpen={onOpenDropdown}
            onClose={onCloseDropdown}
            onLogOut={handleLogOut}
          />
        </HStack>
      </HStack>
      <Show below={`${md - 1}px`}>
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
