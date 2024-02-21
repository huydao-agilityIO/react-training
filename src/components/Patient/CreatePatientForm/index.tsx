import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, HStack } from '@chakra-ui/react';

// Components
import { FormGroupControl } from '@shared/components';
import PatientFormContainer from '../PatientFormContainer';
import { Patient } from '@shared/types';
import { VALIDATION_FORM_PATIENT } from '@shared/utils';

interface CreatePatientFormProps {
  isOpen: boolean;
  isLoading?: boolean;
  errorResponseAPI?: string;
  onClose: () => void;
  onSubmit: (payload: Patient) => void;
}

const CreatePatientForm = ({
  isOpen,
  isLoading = false,
  errorResponseAPI = '',
  onClose,
  onSubmit
}: CreatePatientFormProps) => {
  const { control, handleSubmit } = useForm<Patient>();
  const renderCreatePatientBody = useCallback(() => {
    return (
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
                value={value}
                errorMessage={error?.message}
                onChange={onChange}
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
  }, [control]);

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
      heading="Create new patient"
      idForm="createPatientForm"
      onClose={onClose}
    />
  );
};

export default CreatePatientForm;
