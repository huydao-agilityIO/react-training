import { useQuery } from 'react-query';

// Constants
import {
  API_HOSPITAL_MANAGEMENT,
  LIMIT_PATIENT_TABLE
} from '@shared/constants';

// Services
import { getData } from '@shared/services';

// Types
import { Patient } from '@shared/types';

const getDataByPage = (page: number) =>
  getData(
    `${API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_PATIENT}?page=${page}&limit=${LIMIT_PATIENT_TABLE}`
  );

export const useGetTablePatient = () => {
  const { data, error, isLoading, ...rest } = useQuery<Patient[]>({
    queryFn: () => getData(API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_PATIENT),
    queryKey: ['patient']
  });
  const count = Math.ceil((data ?? []).length / LIMIT_PATIENT_TABLE);

  return {
    data,
    error,
    count,
    isLoading,
    ...rest
  };
};

export const useGetTablePatientByPagination = (page: number) =>
  useQuery<Patient[]>({
    queryFn: () => getDataByPage(page),
    queryKey: ['patient', page],
    keepPreviousData: true
  });
