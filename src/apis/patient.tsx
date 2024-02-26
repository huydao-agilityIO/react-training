import { useMutation, useQuery, useQueryClient } from 'react-query';

// Constants
import {
  API_HOSPITAL_MANAGEMENT,
  LIMIT_PATIENT_TABLE
} from '@shared/constants';

// Services
import { getData, postData, putData } from '@shared/services';

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

export const useGetPatientById = (id: string, onSuccess: () => void) =>
  useQuery<Patient>({
    enabled: !!id,
    queryKey: ['patient', id],
    queryFn: () => {
      return getData(
        `${API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_PATIENT}/${id}`
      );
    },
    onSuccess: () => {
      onSuccess();
    }
  });

export const useGetTablePatientByPagination = (page: number) =>
  useQuery<Patient[]>({
    queryFn: () => getDataByPage(page),
    queryKey: ['patient', page],
    keepPreviousData: true
  });

export const useAddNewPatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['patient'],
    mutationFn: (data: Patient) => {
      return postData<Patient>(
        API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_PATIENT,
        data
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patient'] });
    }
  });
};

export const useEditPatient = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['patient', id],
    mutationFn: (data: Patient) => {
      return putData<Patient>(
        `${API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_PATIENT}/${id}`,
        data
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patient'] });
    }
  });
};
