import { API_HOSPITAL_MANAGEMENT } from '@shared/constants';
import { getData } from '@shared/services';
import { useQuery } from 'react-query';

export const useGetHospitalStaffList = () =>
  useQuery({
    queryKey: ['staff'],
    queryFn: () => getData(API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_STAFF)
  });
