import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDisclosure } from '@chakra-ui/react';

// Apis
import {
  useAddNewPatient,
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
    onOpenEditPatientModal
  }: {
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
      useGetPatientById(id);
    const {
      firstName,
      lastName,
      department,
      appointmentDate,
      serialNumber,
      amount
    } = (dataPatientById as Patient) || {};
    const { control, setValue } = useForm<Patient>({
      defaultValues: {
        firstName: firstName ?? '',
        lastName: lastName ?? '',
        department: department ?? '',
        appointmentDate: appointmentDate ?? '',
        serialNumber: serialNumber ?? '',
        amount: amount ?? 0
      }
    });

    const handleAddNewPatient = useCallback(
      (payload: Patient) => {
        mutate(payload);
        onClose();
      },
      [mutate, onClose]
    );

    useEffect(() => {
      if (!isLoadingDataPatientById) {
        setValue('firstName', firstName);
        setValue('lastName', lastName);
        setValue('department', department);
        setValue('appointmentDate', appointmentDate);
        setValue('serialNumber', serialNumber);
        setValue('amount', amount);
      }
    }, [
      amount,
      appointmentDate,
      department,
      firstName,
      isLoadingDataPatientById,
      lastName,
      serialNumber,
      setValue
    ]);

    const handleOpenModalPatient = (idPatient: string) => {
      setId(idPatient);

      return onOpenEditPatientModal();
    };

    return (
      <>
        <TablePatientWrapper
          onOpen={onOpen}
          onOpenEditPatientModal={handleOpenModalPatient}
        />
        <CreatePatientForm
          isOpen={isOpen}
          onClose={onClose}
          isLoading={isLoading}
          onSubmit={handleAddNewPatient}
        />
        <EditPatientForm
          isLoadingFetchDataInitial={isLoadingDataPatientById}
          control={control}
          isOpen={isOpenEditPatientModal}
          onClose={onCloseEditPatientModal}
          onSubmit={() => {}}
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
