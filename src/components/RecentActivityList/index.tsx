import { Box, Heading, List, ListItem } from '@chakra-ui/react';

// Types
import { RecentActivity } from '@shared/types';

// Components
import { TextHelper } from '@shared/components';
import { calculateTime } from '@shared/utils';

interface RecentActivityItemProps {
  items: RecentActivity[];
}

const RecentActivityList = ({ items }: RecentActivityItemProps) => {
  return (
    <List display="flex" flexDirection="column" gap={4}>
      {items.map(({ id, time, action }) => {
        const currentTime = new Date(time);

        return (
          <ListItem key={id} display="flex" gap={7.5}>
            <Box
              bg="primary.400"
              w={2.5}
              height={2.5}
              borderRadius="full"
              marginTop={1}
            />
            <Box>
              <Heading
                fontSize="xl"
                lineHeight="shorter"
                variant="secondary"
                marginBottom={2}>
                {calculateTime(currentTime)}
              </Heading>
              <TextHelper>{action}</TextHelper>
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
};

export default RecentActivityList;
