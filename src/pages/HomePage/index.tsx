// Layouts
import { DashboardLayout } from '@shared/layouts';
import TablePatientLayout from '@shared/pages/HomePage/TablePatientLayout';

const HomePage = () => {
  return (
    <DashboardLayout onSearch={() => {}}>
      <TablePatientLayout />
    </DashboardLayout>
  );
};

export default HomePage;
