// Apis
import { useGetTablePatient } from '@shared/apis';

// Layouts
import { DashboardLayout } from '@shared/layouts';

// Components
import TablePatient from '@shared/pages/HomePage/TablePatient';

const HomePage = () => {
  const { data: dataPatient, isLoading } = useGetTablePatient();

  return (
    <DashboardLayout onSearch={() => {}}>
      <TablePatient data={dataPatient ?? []} isLoading={isLoading} />
    </DashboardLayout>
  );
};

export default HomePage;
