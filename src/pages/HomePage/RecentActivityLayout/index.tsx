import { ErrorBoundary } from 'react-error-boundary';
import { Center, HStack, Stack } from '@chakra-ui/react';

// Apis
import { useGetRecentActivityList } from '@shared/apis/staff';

// Layouts
import { ListLayout } from '@shared/layouts';

// Components
import {
  ProgressBar,
  RecentActivityList,
  TextHelper
} from '@shared/components';

const RecentActivityLayout = () => {
  const { data: recentActivityData, isLoading: isLoadingRecentActivityList } =
    useGetRecentActivityList();

  return (
    <HStack justifyContent="space-between" gap={7.5} alignItems="flex-start">
      <ListLayout
        title="Recent activity"
        isLoading={isLoadingRecentActivityList}>
        <ErrorBoundary
          fallback={
            <Center>
              <TextHelper>Oop!! Something is wrong...</TextHelper>
            </Center>
          }>
          <RecentActivityList items={recentActivityData} />
        </ErrorBoundary>
      </ListLayout>
      <ListLayout
        title="Recent activity"
        isLoading={isLoadingRecentActivityList}>
        <Stack gap={6}>
          <ProgressBar label="Usa" value={95} />
          <ProgressBar label="Ufrica" variant="success" value={75} />
          <ProgressBar label="Uk" variant="warning" value={55} />
          <ProgressBar label="Canada" variant="danger" value={25} />
        </Stack>
      </ListLayout>
    </HStack>
  );
};

export default RecentActivityLayout;
