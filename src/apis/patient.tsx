import { useQuery } from 'react-query';

// Constants
import { API_HOSPITAL_MANAGEMENT } from '@shared/constants';

// Services
import { getData } from '@shared/services';

// Types
import { Patient } from '@shared/types';

export const useGetTablePatient = () => {
  const { data, error, isLoading, ...rest } = useQuery<Patient[]>({
    queryFn: () => getData(API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_PATIENT),
    queryKey: ['patient']
  });

  return {
    data,
    error,
    isLoading,
    ...rest
  };
};
