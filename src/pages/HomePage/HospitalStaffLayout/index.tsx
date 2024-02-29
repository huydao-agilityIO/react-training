// Apis
import { useGetHospitalStaffList } from '@shared/apis';

// Layouts
import { ListLayout } from '@shared/layouts';

// Components
import { ListCard } from '@shared/components';

const HospitalStaffLayout = () => {
  const { data: staffs, isLoading: isLoadingStaffs } =
    useGetHospitalStaffList();

  return (
    <ListLayout title="Hospital staff" isLoading={isLoadingStaffs}>
      <ListCard cards={staffs} />
    </ListLayout>
  );
};

export default HospitalStaffLayout;
