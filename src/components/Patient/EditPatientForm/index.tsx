import { useCallback } from 'react';
import { Control, Controller } from 'react-hook-form';
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
  isLoadingFetchDataInitial: boolean;
  errorResponseAPI?: string;
  control?: Control<Patient>;
  onClose: () => void;
  onSubmit: () => void;
}

const EditPatientForm = ({
  isOpen,
  isLoading = false,
  isLoadingFetchDataInitial = true,
  errorResponseAPI = '',
  control,
  onClose,
  onSubmit
}: EditPatientFormProps) => {
  const renderCreatePatientBody = useCallback(() => {
    return isLoadingFetchDataInitial ? (
      <Center p={5}>
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
          onClick={onSubmit}>
          Submit
        </Button>
      </HStack>
    );
  }, [errorResponseAPI, isLoading, onClose, onSubmit]);

  return (
    <PatientFormContainer
      isOpen={isOpen}
      body={renderCreatePatientBody()}
      errorResponseAPI={errorResponseAPI}
      footer={renderCreatePatientFooter()}
      heading="Create new patient"
      idForm="createPatientForm"
      onClose={onClose}
    />
  );
};

export default EditPatientForm;
