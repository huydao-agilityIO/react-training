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

const getDatabyPage = (page: number) =>
  getData(
    `${API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_PATIENT}?page=${page}&limit=${LIMIT_PATIENT_TABLE}`
  );

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

export const useGetTablePatientByPagination = (page: number) => {
  const { data, error, isLoading, ...rest } = useQuery<Patient[]>({
    queryFn: () => getDatabyPage(page),
    queryKey: ['patient', page],
    keepPreviousData: true
  });

  return {
    data,
    error,
    isLoading,
    ...rest
  };
};
