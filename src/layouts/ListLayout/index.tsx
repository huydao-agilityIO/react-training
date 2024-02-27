import { ReactNode } from 'react';
import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Spinner,
  Stack
} from '@chakra-ui/react';

interface ListLayoutProps {
  children: ReactNode;
  title?: string;
  rightElement?: ReactNode;
  isLoading?: boolean;
}

const ListLayout = ({
  children,
  title = '',
  rightElement = '',
  isLoading = false
}: ListLayoutProps) => (
  <Stack bg="light.300" borderRadius="xl" p={{ base: 4, md: 7.5 }}>
    <HStack marginBottom={6}>
      <Heading size="md" variant="secondary" textTransform="capitalize">
        {title}
      </Heading>
      {rightElement && <Box>{rightElement}</Box>}
    </HStack>
    <Divider marginBottom={6} />
    {isLoading ? (
      <Center height={306}>
        <Spinner />
      </Center>
    ) : (
      <Box marginY={7.5} overflowX="auto">
        {children}
      </Box>
    )}
  </Stack>
);

export default ListLayout;
