import { useQuery } from 'react-query';

// Services
import { getData } from '@shared/services';

// Constants
import { API_HOSPITAL_MANAGEMENT } from '@shared/constants';

export const useGetRecentActivityList = () =>
  useQuery({
    queryKey: ['recent'],
    queryFn: () =>
      getData(API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_RECENT_ACTIVITY)
  });
