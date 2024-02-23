import { memo, useCallback } from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';

// Components
import PatientFormContainer from '../PatientFormContainer';

interface DeletePatientModalProps {
  isOpenModalDeletePatient: boolean;
  isLoadingDeletePatient?: boolean;
  onCloseModalDeletePatient: () => void;
  onDeletePatient: () => void;
}

const DeletePatientModal = ({
  isOpenModalDeletePatient,
  isLoadingDeletePatient = false,
  onCloseModalDeletePatient,
  onDeletePatient
}: DeletePatientModalProps) => {
  const renderDeletePatientBody = useCallback(
    () => (
      <Text variant="helper" size="md">
        Do you want to remove the patient from the table?
      </Text>
    ),
    []
  );

  const renderDeletePatientFooter = useCallback(
    () => (
      <HStack gap={5}>
        <Button
          variant="secondary"
          isDisabled={isLoadingDeletePatient}
          onClick={onCloseModalDeletePatient}>
          Cancel
        </Button>
        <Button
          type="submit"
          isLoading={isLoadingDeletePatient}
          onClick={onDeletePatient}>
          Delete
        </Button>
      </HStack>
    ),
    [isLoadingDeletePatient, onCloseModalDeletePatient, onDeletePatient]
  );

  return (
    <PatientFormContainer
      isDeleteModal
      isOpen={isOpenModalDeletePatient}
      heading="Delete Patient"
      body={renderDeletePatientBody()}
      footer={renderDeletePatientFooter()}
      onClose={onCloseModalDeletePatient}
    />
  );
};

export default memo(DeletePatientModal);
