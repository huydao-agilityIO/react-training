import { useCallback, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

// Apis
import {
  useAddNewPatient,
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
import { CreatePatientForm, EditPatientForm } from '@shared/components';
import TablePatient from '@shared/pages/HomePage/TablePatient';

const HomePage = () => {
  const TablePatientWrapper = ({
    onOpen,
    isLoadingOpenEditModal,
    onOpenEditPatientModal
  }: {
    isLoadingOpenEditModal: boolean;
    onOpen: () => void;
    onOpenEditPatientModal: (id: string) => void;
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
        isLoadingOpenEditModal={isLoadingOpenEditModal}
      />
    );
  };

  const TablePatientLayout = () => {
    const [id, setId] = useState<string>('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
      isOpen: isOpenEditPatientModal,
      onOpen: onOpenEditPatientModal,
      onClose: onCloseEditPatientModal
    } = useDisclosure();
    const { mutate, isLoading } = useAddNewPatient();
    const { data: dataPatientById, isLoading: isLoadingDataPatientById } =
      useGetPatientById(id, onOpenEditPatientModal);
    const { mutate: handleEdit, isLoading: isLoadingEdit } = useEditPatient(id);

    const handleAddNewPatient = useCallback(
      (payload: Patient) => {
        mutate(payload);
        onClose();
      },
      [mutate, onClose]
    );

    const handleOpenModalPatient = (idPatient: string) => setId(idPatient);

    const handleCloseModalPatient = () => {
      setId('');
      return onCloseEditPatientModal();
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

    return (
      <>
        <TablePatientWrapper
          onOpen={onOpen}
          onOpenEditPatientModal={handleOpenModalPatient}
          isLoadingOpenEditModal={isLoadingDataPatientById}
        />
        <CreatePatientForm
          isOpen={isOpen}
          onClose={onClose}
          isLoading={isLoading}
          onSubmit={handleAddNewPatient}
        />
        {dataPatientById && !isLoadingEdit && (
          <EditPatientForm
            dataPatientById={dataPatientById}
            isEditing={isLoadingEdit}
            isOpen={isOpenEditPatientModal}
            onClose={handleCloseModalPatient}
            onSubmit={handleEditPatient}
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
