import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

// Apis
import {
  useGetTablePatient,
  useGetTablePatientByPagination
} from '@shared/apis';

// Layouts
import { DashboardLayout } from '@shared/layouts';

// Components
import TablePatient from '@shared/pages/HomePage/TablePatient';
import { CreatePatientForm } from '@shared/components';

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  // Fetch all data to calc page number
  const { count: totalPage } = useGetTablePatient();

  // Fetch data with param: page and limit
  const { data: dataPatientByPagination, isLoading } =
    useGetTablePatientByPagination(currentPage);

  return (
    <>
      <DashboardLayout onSearch={() => {}}>
        <TablePatient
          data={dataPatientByPagination ?? []}
          currentPage={currentPage}
          isLoading={isLoading}
          totalPage={totalPage}
          onChangePage={setCurrentPage}
          onOpenCreatePatientModal={onOpen}
        />
      </DashboardLayout>
      <CreatePatientForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={() => {}}
      />
    </>
  );
};

export default HomePage;
