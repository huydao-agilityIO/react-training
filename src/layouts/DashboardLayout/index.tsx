import { ChangeEventHandler, ReactNode, memo } from 'react';
import { Show, Stack } from '@chakra-ui/react';

// Constants
import { SIDEBAR_MAPPING } from '@shared/constants';

// Images
import urlBrand from '@shared/assets/images/brand.png';

// Themes
import { breakpoints } from '@shared/themes/bases';

// Components
import { Header, Sidebar } from '@shared/components';

interface DashboardLayoutProps {
  children: ReactNode;
  onSearch: ChangeEventHandler<HTMLInputElement>;
}

const DashboardLayout = ({ children, onSearch }: DashboardLayoutProps) => {
  const { lg } = breakpoints || {};

  return (
    <Stack gap={0} marginLeft={{ lg: 52, xl: 270 }}>
      <Show above={`${lg}px`}>
        <Sidebar sidebarMapping={SIDEBAR_MAPPING} urlBrand={urlBrand} />
      </Show>
      <Header onSearch={onSearch} />
      <Stack p={{ base: 2.5, md: 5, lg: 7.5 }} w="full">
        {children}
      </Stack>
    </Stack>
  );
};

export default memo(DashboardLayout);
