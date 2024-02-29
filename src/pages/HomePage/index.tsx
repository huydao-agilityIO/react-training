// Layouts
import { DashboardLayout } from '@shared/layouts';

// Components
import HospitalStaffLayout from '@shared/pages/HomePage/HospitalStaffLayout';
import TablePatientLayout from '@shared/pages/HomePage/TablePatientLayout';
import RecentActivityLayout from '@shared/pages/HomePage/RecentActivityLayout';

const HomePage = () => {
  return (
    <DashboardLayout onSearch={() => {}}>
      <TablePatientLayout />
      <HospitalStaffLayout />
      <RecentActivityLayout />
    </DashboardLayout>
  );
};

export default HomePage;
