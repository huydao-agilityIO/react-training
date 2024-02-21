import { useCallback, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

// Apis
import {
  useAddNewPatient,
  useGetTablePatient,
  useGetTablePatientByPagination
} from '@shared/apis';

// types
import { Patient } from '@shared/types';

// Layouts
import { DashboardLayout } from '@shared/layouts';

// Components
import { CreatePatientForm } from '@shared/components';
import TablePatient from '@shared/pages/HomePage/TablePatient';

const HomePage = () => {
  const TablePatientWrapper = ({ onOpen }: { onOpen: () => void }) => {
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
      />
    );
  };

  const TablePatientLayout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { mutate, isLoading } = useAddNewPatient();

    const handleAddNewPatient = useCallback(
      (payload: Patient) => {
        mutate(payload);
        onClose();
      },
      [mutate, onClose]
    );

    return (
      <>
        <TablePatientWrapper onOpen={onOpen} />
        <CreatePatientForm
          isOpen={isOpen}
          onClose={onClose}
          isLoading={isLoading}
          onSubmit={handleAddNewPatient}
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
