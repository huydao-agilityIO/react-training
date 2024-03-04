import { memo } from 'react';

// Hocs
import { withIsAuth } from '@shared/hocs';

// Layouts
import { DashboardLayout } from '@shared/layouts';

// Components
import HospitalStaffLayout from '@shared/pages/HomePage/HospitalStaffLayout';
import TablePatientLayout from '@shared/pages/HomePage/TablePatientLayout';
import RecentActivityLayout from '@shared/pages/HomePage/RecentActivityLayout';

const Component = () => {
  return (
    <DashboardLayout onSearch={() => {}}>
      <TablePatientLayout />
      <HospitalStaffLayout />
      <RecentActivityLayout />
    </DashboardLayout>
  );
};

const HomePage = memo(withIsAuth(Component));

export default HomePage;
