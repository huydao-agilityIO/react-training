// Layouts
import { DashboardLayout } from '@shared/layouts';

// Components
import HospitalStaffLayout from '@shared/pages/HomePage/HospitalStaffLayout';
import TablePatientLayout from '@shared/pages/HomePage/TablePatientLayout';

const HomePage = () => {
  return (
    <DashboardLayout onSearch={() => {}}>
      <TablePatientLayout />
      <HospitalStaffLayout />
    </DashboardLayout>
  );
};

export default HomePage;
