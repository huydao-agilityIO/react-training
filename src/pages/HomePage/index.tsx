import { Stack } from '@chakra-ui/react';

// Apis
import { useGetTablePatient } from '@shared/apis';

// Components
import TablePatient from '@shared/pages/HomePage/TablePatient';

const HomePage = () => {
  const { data: dataPatient, isLoading } = useGetTablePatient();

  return (
    <Stack padding={7.5}>
      <TablePatient data={dataPatient ?? []} isLoading={isLoading} />
    </Stack>
  );
};

export default HomePage;
