import { useState } from 'react';

// Apis
import {
  useGetTablePatient,
  useGetTablePatientByPagination
} from '@shared/apis';

// Constants
import { LIMIT_PATIENT_TABLE } from '@shared/constants';

// Layouts
import { DashboardLayout } from '@shared/layouts';

// Components
import TablePatient from '@shared/pages/HomePage/TablePatient';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // Fetch all data to calc page number
  const { data: dataPatient, isLoading } = useGetTablePatient();

  // Fetch data with param: page and limit
  const { data: dataPatientByPagination } =
    useGetTablePatientByPagination(currentPage);

  const totalPage = Math.ceil((dataPatient ?? []).length / LIMIT_PATIENT_TABLE);

  const handleChangePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DashboardLayout onSearch={() => {}}>
      <TablePatient
        data={dataPatientByPagination ?? []}
        currentPage={currentPage}
        isLoading={isLoading}
        totalPage={totalPage}
        onChangePage={handleChangePage}
      />
    </DashboardLayout>
  );
};

export default HomePage;
