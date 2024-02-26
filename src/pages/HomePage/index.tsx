import { useCallback, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

// Apis
import {
  useAddNewPatient,
  useDeletePatient,
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
    onOpenDeletePatientModal
  }: {
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
      />
    );
  };

  const TablePatientLayout = () => {
    const [id, setId] = useState<string>('');

    // Add new a patient
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { mutate, isLoading } = useAddNewPatient();

    const { data: dataPatientById, isLoading: isLoadingDataPatientById } =
      useGetPatientById(id);

    const {
      isOpen: isOpenEditPatientModal,
      onOpen: onOpenEditPatientModal,
      onClose: onCloseEditPatientModal
    } = useDisclosure();

    // Delete a patient
    const {
      isOpen: isOpenDeletePatientModal,
      onOpen: onOpenDeletePatientModal,
      onClose: onCloseDeletePatientModal
    } = useDisclosure();
    const {
      mutate: handleDeletePatientByApi,
      isLoading: isLoadingDeletePatient
    } = useDeletePatient(id);

    const handleAddNewPatient = useCallback(
      (payload: Patient) => {
        mutate(payload);
        onClose();
      },
      [mutate, onClose]
    );

    const handleOpenModalPatient = (idPatient: string) => {
      setId(idPatient);
      return onOpenEditPatientModal();
    };

    const handleOpenDeletePatientModal = (idPatient: string) => {
      setId(idPatient);
      onOpenDeletePatientModal();
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
        />
        <CreatePatientForm
          isOpen={isOpen}
          onClose={onClose}
          isLoading={isLoading}
          onSubmit={handleAddNewPatient}
        />
        <EditPatientForm
          dataPatientById={dataPatientById}
          isLoadingFetchDataInitial={isLoadingDataPatientById}
          isOpen={isOpenEditPatientModal}
          onClose={onCloseEditPatientModal}
          onSubmit={() => {}}
        />
        <DeletePatientModal
          isOpenModalDeletePatient={isOpenDeletePatientModal}
          onCloseModalDeletePatient={onCloseDeletePatientModal}
          onDeletePatient={handleDeletePatient}
          isLoadingDeletePatient={isLoadingDeletePatient}
        />
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
