import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Center, HStack, Spinner } from '@chakra-ui/react';
import dayjs from 'dayjs';

// Types
import { Patient } from '@shared/types';

// Utils
import { VALIDATION_FORM_PATIENT } from '@shared/utils';

// Components
import { FormGroupControl } from '@shared/components';
import PatientFormContainer from '../PatientFormContainer';

interface EditPatientFormProps {
  isOpen: boolean;
  isLoading?: boolean;
  isLoadingFetchDataInitial?: boolean;
  dataPatientById?: Patient;
  errorResponseAPI?: string;
  onClose: () => void;
  onSubmit: (patient: Patient) => void;
}

const EditPatientForm = ({
  isOpen,
  isLoading = false,
  isLoadingFetchDataInitial = true,
  dataPatientById,
  errorResponseAPI = '',
  onClose,
  onSubmit
}: EditPatientFormProps) => {
  const {
    firstName,
    lastName,
    department,
    appointmentDate,
    serialNumber,
    amount
  } = (dataPatientById as Patient) || {};

  const { control, setValue, handleSubmit } = useForm<Patient>({
    defaultValues: {
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      department: department ?? '',
      appointmentDate: appointmentDate ?? '',
      serialNumber: serialNumber ?? '',
      amount: amount ?? 0
    }
  });

  useEffect(() => {
    if (!isLoadingFetchDataInitial) {
      setValue('firstName', firstName);
      setValue('lastName', lastName);
      setValue('department', department);
      setValue('appointmentDate', appointmentDate);
      setValue('serialNumber', serialNumber);
      setValue('amount', amount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingFetchDataInitial]);

  const renderCreatePatientBody = useCallback(() => {
    return isLoadingFetchDataInitial ? (
      <Center minHeight={404}>
        <Spinner size="md" />
      </Center>
    ) : (
      <>
        <Controller
          name="firstName"
          control={control}
          rules={VALIDATION_FORM_PATIENT.FIRST_NAME}
          render={({
            field: { value, onChange, ...rest },
            fieldState: { error }
          }) => {
            return (
              <FormGroupControl
                type="text"
                id="firstName"
                placeholder="First Name"
                value={value}
                errorMessage={error?.message}
                onChange={onChange}
                {...rest}
              />
            );
          }}
        />
        <Controller
          name="lastName"
          control={control}
          rules={VALIDATION_FORM_PATIENT.LAST_NAME}
          render={({
            field: { value, onChange, ...rest },
            fieldState: { error }
          }) => {
            return (
              <FormGroupControl
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={value}
                errorMessage={error?.message}
                onChange={onChange}
                {...rest}
              />
            );
          }}
        />
        <Controller
          name="department"
          control={control}
          rules={VALIDATION_FORM_PATIENT.DEPARTMENT}
          render={({
            field: { value, onChange, ...rest },
            fieldState: { error }
          }) => {
            return (
              <FormGroupControl
                type="text"
                id="department"
                placeholder="Department"
                value={value}
                errorMessage={error?.message}
                onChange={onChange}
                {...rest}
              />
            );
          }}
        />
        <Controller
          name="appointmentDate"
          control={control}
          rules={VALIDATION_FORM_PATIENT.APPOINTMENT_DATE}
          render={({
            field: { value, onChange, ...rest },
            fieldState: { error }
          }) => {
            return (
              <FormGroupControl
                type="date"
                id="appointmentDate"
                placeholder="Appointment Date"
                value={dayjs(value).format('YYYY-MM-DD')}
                errorMessage={error?.message}
                onChange={(e) => onChange(e)}
                {...rest}
              />
            );
          }}
        />
        <Controller
          name="serialNumber"
          control={control}
          rules={VALIDATION_FORM_PATIENT.SERIAL_NUMBER}
          render={({
            field: { value, onChange, ...rest },
            fieldState: { error }
          }) => {
            return (
              <FormGroupControl
                type="number"
                id="serialNumber"
                placeholder="Serial Number"
                value={value}
                errorMessage={error?.message}
                onChange={onChange}
                {...rest}
              />
            );
          }}
        />
        <Controller
          name="amount"
          control={control}
          rules={VALIDATION_FORM_PATIENT.AMOUNT}
          render={({
            field: { value, onChange, ...rest },
            fieldState: { error }
          }) => {
            return (
              <FormGroupControl
                type="number"
                id="amount"
                placeholder="Amount"
                value={value}
                errorMessage={error?.message}
                onChange={onChange}
                {...rest}
              />
            );
          }}
        />
      </>
    );
  }, [control, isLoadingFetchDataInitial]);

  const renderCreatePatientFooter = useCallback(() => {
    return (
      <HStack gap={5}>
        <Button variant="secondary" isDisabled={isLoading} onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          isLoading={isLoading}
          isDisabled={!!errorResponseAPI}
          onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </HStack>
    );
  }, [errorResponseAPI, handleSubmit, isLoading, onClose, onSubmit]);

  return (
    <PatientFormContainer
      isOpen={isOpen}
      body={renderCreatePatientBody()}
      errorResponseAPI={errorResponseAPI}
      footer={renderCreatePatientFooter()}
      heading="Edit patient"
      idForm="editPatientForm"
      onClose={onClose}
    />
  );
};

export default EditPatientForm;
