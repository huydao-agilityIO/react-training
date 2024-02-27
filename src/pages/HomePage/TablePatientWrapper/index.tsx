import { useState, ChangeEvent } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Stack, HStack, Heading, Button } from '@chakra-ui/react';

// Svg
import { SearchIcon } from '@shared/SVG';

// Apis
import {
  useGetTablePatient,
  useGetTablePatientByPagination
} from '@shared/apis';

// Types
import { Patient } from '@shared/types';

// Components
import { SearchBar, TextErrorMessage } from '@shared/components';
import TablePatient from '@shared/pages/HomePage/TablePatient';

const TablePatientWrapper = ({
  onOpenCreatePatientModal,
  onOpenEditPatientModal,
  onOpenDeletePatientModal,
  isLoadingOpenEditModal
}: {
  isLoadingOpenEditModal: boolean;
  onOpenCreatePatientModal: () => void;
  onOpenEditPatientModal: (id: string) => void;
  onOpenDeletePatientModal: (id: string) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  // Fetch all data to calc page number
  const { count: totalPage } = useGetTablePatient();

  // Fetch data with param: page and limit
  const { data: dataPatientByPagination, isLoading } =
    useGetTablePatientByPagination(currentPage, searchTerm);

  const dataPatientByPaginationFilter: Patient[] =
    dataPatientByPagination?.filter(
      (data) =>
        `${data.firstName} ${data.lastName}`
          .toLowerCase()
          .indexOf(searchTerm.toLowerCase()) !== -1
    ) as Patient[];

  const handleSearchTablePatient = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value.trim());

  return (
    <Stack bg="light.300" p={{ base: 4, md: 7.5 }} borderRadius="xl">
      <HStack justifyContent="space-between">
        <Heading size="md" variant="secondary" alignItems="center">
          Patients
        </Heading>
        <HStack>
          <SearchBar
            onChange={handleSearchTablePatient}
            placeholder="Search here..."
            leftContent={<SearchIcon />}
          />
          <Button onClick={onOpenCreatePatientModal}>Add Patient</Button>
        </HStack>
      </HStack>
      <ErrorBoundary
        fallback={
          <TextErrorMessage>Oop! Something is wrong...</TextErrorMessage>
        }>
        <TablePatient
          data={dataPatientByPaginationFilter ?? []}
          currentPage={currentPage}
          isLoading={isLoading}
          totalPage={searchTerm === '' ? totalPage : 0}
          onChangePage={setCurrentPage}
          onOpenEditPatientModal={onOpenEditPatientModal}
          onOpenDeletePatientModal={onOpenDeletePatientModal}
          isLoadingOpenEditModal={isLoadingOpenEditModal}
        />
      </ErrorBoundary>
    </Stack>
  );
};

export default TablePatientWrapper;
