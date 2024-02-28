import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Center, HStack, Spinner } from '@chakra-ui/react';
import dayjs from 'dayjs';

// Types
import { Patient } from '@shared/types';

// Utils
import { VALIDATION_FORM_PATIENT, formatValueInputNumber } from '@shared/utils';

// Components
import { FormGroupControl } from '@shared/components';
import PatientFormContainer from '../PatientFormContainer';

interface EditPatientFormProps {
  isOpen: boolean;
  isEditing?: boolean;
  dataPatientById?: Patient;
  errorResponseAPI?: string;
  onClose: () => void;
  onSubmit: (patient: Patient) => void;
}

const EditPatientForm = ({
  isOpen,
  isEditing = false,
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
  const {
    control,
    handleSubmit,
    reset,
    formState: { dirtyFields }
  } = useForm<Patient>({
    defaultValues: {
      firstName,
      lastName,
      department,
      appointmentDate,
      serialNumber,
      amount
    }
  });

  const handleClose = () => {
    onClose();
    reset();
  };

  const renderCreatePatientBody = useCallback(() => {
    return !dataPatientById ? (
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
          render={({ field: { value, ...rest }, fieldState: { error } }) => {
            return (
              <FormGroupControl
                type="date"
                id="appointmentDate"
                placeholder="Appointment Date"
                value={dayjs(value).format('YYYY-MM-DD')}
                errorMessage={error?.message}
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
                id="serialNumber"
                placeholder="Serial Number"
                value={value}
                errorMessage={error?.message}
                onChange={(e) => {
                  const value = formatValueInputNumber(e.target.value);

                  onChange(value);
                }}
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
                id="amount"
                placeholder="Amount"
                value={value}
                errorMessage={error?.message}
                onChange={(e) => {
                  const value = formatValueInputNumber(e.target.value);

                  onChange(value);
                }}
                {...rest}
              />
            );
          }}
        />
      </>
    );
  }, [control, dataPatientById]);

  const renderCreatePatientFooter = useCallback(() => {
    return (
      <HStack gap={5}>
        <Button variant="secondary" isDisabled={isEditing} onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          isLoading={isEditing}
          isDisabled={!!errorResponseAPI || !Object.keys(dirtyFields).length}
          onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </HStack>
    );
  }, [
    dirtyFields,
    errorResponseAPI,
    handleSubmit,
    isEditing,
    onClose,
    onSubmit
  ]);

  return (
    <PatientFormContainer
      isOpen={isOpen}
      body={renderCreatePatientBody()}
      errorResponseAPI={errorResponseAPI}
      footer={renderCreatePatientFooter()}
      heading="Edit patient"
      idForm="editPatientForm"
      onClose={handleClose}
    />
  );
};

export default EditPatientForm;
