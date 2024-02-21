import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, HStack } from '@chakra-ui/react';

// Components
import { FormGroupControl } from '@shared/components';
import PatientFormContainer from '../PatientFormContainer';

interface CreatePatientFormProps {
  isOpen: boolean;
  isLoading?: boolean;
  errorResponseAPI?: string;
  onClose: () => void;
  onSubmit: () => void;
}

const CreatePatientForm = ({
  isOpen,
  isLoading = false,
  errorResponseAPI = '',
  onClose,
  onSubmit
}: CreatePatientFormProps) => {
  const { control } = useForm();
  const renderCreatePatientBody = useCallback(() => {
    return (
      <>
        <Controller
          name="firstName"
          control={control}
          rules={{}}
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
          rules={{}}
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
          rules={{}}
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
          rules={{}}
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
          rules={{}}
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
          rules={{}}
          render={({
            field: { value, onChange, ...rest },
            fieldState: { error }
          }) => {
            return (
              <FormGroupControl
                type="number"
                id="amount"
                placeholder="Amount"
                value={value?.toString()}
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
        <Button variant="secondary" isDisabled={isLoading}>
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading} onClick={onSubmit}>
          Submit
        </Button>
      </HStack>
    );
  }, [isLoading, onSubmit]);

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
