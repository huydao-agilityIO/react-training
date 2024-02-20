import { useState } from 'react';

// Apis
import {
  useGetTablePatient,
  useGetTablePatientByPagination
} from '@shared/apis';

// Layouts
import { DashboardLayout } from '@shared/layouts';

// Components
import TablePatient from '@shared/pages/HomePage/TablePatient';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // Fetch all data to calc page number
  const { count: totalPage } = useGetTablePatient();

  // Fetch data with param: page and limit
  const { data: dataPatientByPagination, isLoading } =
    useGetTablePatientByPagination(currentPage);

  return (
    <DashboardLayout onSearch={() => {}}>
      <TablePatient
        data={dataPatientByPagination ?? []}
        currentPage={currentPage}
        isLoading={isLoading}
        totalPage={totalPage}
        onChangePage={setCurrentPage}
      />
    </DashboardLayout>
  );
};

export default HomePage;
