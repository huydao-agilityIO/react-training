import { useCallback, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

// Apis
import {
  useAddNewPatient,
  useDeletePatient,
  useEditPatient,
  useGetPatientById,
  useGetTablePatient,
  useGetTablePatientByPagination
} from '@shared/apis';

// types
import { Patient } from '@shared/types';

// Layouts
import { DashboardLayout } from '@shared/layouts';

// Components
import {
  CreatePatientForm,
  DeletePatientModal,
  EditPatientForm
} from '@shared/components';
import TablePatient from '@shared/pages/HomePage/TablePatient';

const HomePage = () => {
  const TablePatientWrapper = ({
    onOpen,
    onOpenEditPatientModal,
    onOpenDeletePatientModal,
    isLoadingOpenEditModal
  }: {
    isLoadingOpenEditModal: boolean;
    onOpen: () => void;
    onOpenEditPatientModal: (id: string) => void;
    onOpenDeletePatientModal: (id: string) => void;
  }) => {
    const [currentPage, setCurrentPage] = useState(1);
    // Fetch all data to calc page number
    const { count: totalPage } = useGetTablePatient();

    // Fetch data with param: page and limit
    const { data: dataPatientByPagination, isLoading } =
      useGetTablePatientByPagination(currentPage);

    return (
      <TablePatient
        data={dataPatientByPagination ?? []}
        currentPage={currentPage}
        isLoading={isLoading}
        totalPage={totalPage}
        onChangePage={setCurrentPage}
        onOpenCreatePatientModal={onOpen}
        onOpenEditPatientModal={onOpenEditPatientModal}
        onOpenDeletePatientModal={onOpenDeletePatientModal}
        isLoadingOpenEditModal={isLoadingOpenEditModal}
      />
    );
  };

  const TablePatientLayout = () => {
    const [id, setId] = useState<string>('');
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Add new a patient
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { mutate: handleAdd, isLoading: isLoadingAddNewPatient } =
      useAddNewPatient();

    // Edit a patient
    const {
      isOpen: isOpenEditPatientModal,
      onOpen: onOpenEditPatientModal,
      onClose: onCloseEditPatientModal
    } = useDisclosure();
    const { mutate: handleEdit, isLoading: isLoadingEdit } = useEditPatient(id);

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
    const {
      mutate: handleDeletePatientByApi,
      isLoading: isLoadingDeletePatient
    } = useDeletePatient(id);

    const handleAddNewPatient = useCallback(
      (payload: Patient) => {
        handleAdd(payload);
        onClose();
      },
      [handleAdd, onClose]
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

        if (!isLoadingEdit) {
          onCloseEditPatientModal();
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [handleEdit, isLoadingEdit]
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
      handleDeletePatientByApi();

      if (!isLoadingDeletePatient) {
        onCloseDeletePatientModal();
      }
    };

    return (
      <>
        <TablePatientWrapper
          onOpen={onOpen}
          onOpenEditPatientModal={handleOpenModalPatient}
          onOpenDeletePatientModal={handleOpenDeletePatientModal}
          isLoadingOpenEditModal={isLoadingDataPatientById}
        />
        <CreatePatientForm
          isOpen={isOpen}
          onClose={onClose}
          isLoading={isLoadingAddNewPatient}
          onSubmit={handleAddNewPatient}
        />
        {dataPatientById && !isLoadingEdit && (
          <EditPatientForm
            dataPatientById={dataPatientById}
            isOpen={isOpenEditPatientModal}
            onClose={handleCloseModalEditPatient}
            onSubmit={handleEditPatient}
          />
        )}
        {dataPatientById && !isLoadingDeletePatient && (
          <DeletePatientModal
            isOpenModalDeletePatient={isOpenDeletePatientModal}
            onCloseModalDeletePatient={handleCloseModalDeletePatient}
            onDeletePatient={handleDeletePatient}
            isLoadingDeletePatient={isLoadingDeletePatient}
          />
        )}
      </>
    );
  };

  return (
    <DashboardLayout onSearch={() => {}}>
      <TablePatientLayout />
    </DashboardLayout>
  );
};

export default HomePage;
