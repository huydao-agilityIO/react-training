import { useState, useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/react';

// Types
import { Patient } from '@shared/types';

// Apis
import {
  useAddNewPatient,
  useEditPatient,
  useGetPatientById,
  useDeletePatient
} from '@shared/apis';

// Components
import {
  CreatePatientForm,
  DeletePatientModal,
  EditPatientForm
} from '@shared/components';
import TablePatientWrapper from '@shared/pages/HomePage/TablePatientWrapper';

const TablePatientLayout = () => {
  const [id, setId] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // Add new a patient
  const {
    isOpen: isOpenCreatePatientModal,
    onOpen: onOpenCreatePatientModal,
    onClose: onCloseCreatePatientModal
  } = useDisclosure();
  const { mutate: handleAdd, isLoading: isAdding } = useAddNewPatient();

  // Edit a patient
  const {
    isOpen: isOpenEditPatientModal,
    onOpen: onOpenEditPatientModal,
    onClose: onCloseEditPatientModal
  } = useDisclosure();
  const { mutate: handleEdit, isLoading: isEditing } = useEditPatient(id);

  // Delete a patient
  const {
    isOpen: isOpenDeletePatientModal,
    onOpen: onOpenDeletePatientModal,
    onClose: onCloseDeletePatientModal
  } = useDisclosure();
  const { data: dataPatientById, isLoading: isLoadingDataPatientById } =
    useGetPatientById(
      id,
      isEdit ? onOpenEditPatientModal : onOpenDeletePatientModal
    );
  const { mutate: handleDelete, isLoading: isDeleting } = useDeletePatient(id);

  const handleAddNewPatient = useCallback(
    (payload: Patient) => {
      handleAdd(payload);
      onCloseCreatePatientModal();
    },
    [handleAdd, onCloseCreatePatientModal]
  );

  const handleOpenModalPatient = (idPatient: string) => {
    setId(idPatient);
    setIsEdit(true);
  };

  const handleCloseModalEditPatient = () => {
    setId('');
    onCloseEditPatientModal();
  };

  const handleEditPatient = useCallback(
    (payload: Patient) => {
      setId('');
      handleEdit(payload);

      if (!isEditing) {
        onCloseEditPatientModal();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleEdit, isEditing]
  );

  const handleOpenDeletePatientModal = (idPatient: string) => {
    setId(idPatient);
    setIsEdit(false);
  };

  const handleCloseModalDeletePatient = () => {
    setId('');
    onCloseDeletePatientModal();
  };

  const handleDeletePatient = () => {
    handleDelete();

    if (!isDeleting) {
      onCloseDeletePatientModal();
    }
  };

  return (
    <>
      <TablePatientWrapper
        onOpenCreatePatientModal={onOpenCreatePatientModal}
        onOpenEditPatientModal={handleOpenModalPatient}
        onOpenDeletePatientModal={handleOpenDeletePatientModal}
        isLoadingOpenEditModal={isLoadingDataPatientById}
      />
      <CreatePatientForm
        isOpen={isOpenCreatePatientModal}
        onClose={onCloseCreatePatientModal}
        isLoading={isAdding}
        onSubmit={handleAddNewPatient}
      />
      {dataPatientById && !isEditing && (
        <EditPatientForm
          dataPatientById={dataPatientById}
          isOpen={isOpenEditPatientModal}
          onClose={handleCloseModalEditPatient}
          onSubmit={handleEditPatient}
        />
      )}
      {dataPatientById && !isDeleting && (
        <DeletePatientModal
          isOpenModalDeletePatient={isOpenDeletePatientModal}
          onCloseModalDeletePatient={handleCloseModalDeletePatient}
          onDeletePatient={handleDeletePatient}
          isLoadingDeletePatient={isDeleting}
        />
      )}
    </>
  );
};

export default TablePatientLayout;
