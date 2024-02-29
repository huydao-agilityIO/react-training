import { memo } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Image,
  Heading,
  HStack,
  Link
} from '@chakra-ui/react';

// Types
import { SidebarMapping } from '@shared/types';

// Svg
import HomeIcon from '@shared/SVG/HomeIcon';
import { ROUTE } from '@shared/constants';

interface SidebarProps {
  sidebarMapping: SidebarMapping[];
  urlBrand?: string;
}

const Sidebar = ({ sidebarMapping, urlBrand = '' }: SidebarProps) => {
  const navigate = useNavigate();

  const handleNavigateDashboard = () => navigate(`/${ROUTE.DASHBOARD}`);

  return (
    <Stack>
      <Container
        position="fixed"
        zIndex="dropdown"
        overflowY="auto"
        height="100vh"
        bg="light.300"
        top={0}
        left={0}
        p={0}
        width={{ lg: 52, xl: 270 }}>
        <Box px={14} py={16}>
          <Link as={ReactRouterLink} to={ROUTE.DASHBOARD}>
            <Image
              src={urlBrand}
              alt="urlBrand"
              onClick={handleNavigateDashboard}
            />
          </Link>
        </Box>
        <List>
          {sidebarMapping.map(({ heading, contentLink, pathRouter }, index) => (
            <ListItem key={index} paddingLeft={7.5}>
              <Heading
                size="lg"
                fontWeight="bold"
                paddingBottom={1}
                paddingTop={4}>
                {heading}
              </Heading>
              <HStack gap={4} py={4}>
                <HomeIcon />
                <Link
                  color="secondary.250"
                  _hover={{
                    color: 'primary.200'
                  }}
                  _focus={{
                    color: 'primary.200'
                  }}
                  as={ReactRouterLink}
                  to={pathRouter}>
                  {contentLink}
                </Link>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Container>
    </Stack>
  );
};

export default memo(Sidebar);
