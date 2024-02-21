import { ReactNode, memo, useCallback } from 'react';
import { Avatar, Button, HStack, Heading, Stack } from '@chakra-ui/react';

// Constants
import { ACTION_MAPPING, PATIENT_HEADING_MAPPING } from '@shared/constants';

// Types
import { Patient } from '@shared/types';

// Svg
import { SearchIcon } from '@shared/SVG';

// Utils
import {
  convertDateToDayMonthYear,
  formatAmountCurrency,
  formatFullName
} from '@shared/utils';

// Components
import {
  ActionDropdown,
  DataTable,
  SearchBar,
  TextHelper
} from '@shared/components';

interface TablePatientProps {
  data: Patient[];
  currentPage: number;
  totalPage: number;
  isLoading?: boolean;
  onOpenCreatePatientModal?: () => void;
  onChangePage: (pageNumber: number) => void;
}

const TablePatient = ({
  data = [],
  currentPage,
  totalPage,
  isLoading = false,
  onOpenCreatePatientModal,
  onChangePage
}: TablePatientProps) => {
  const renderPatientName = useCallback(
    (firstName: string, lastName: string, urlAvatar: string) => (
      <HStack spacing={5}>
        <Avatar src={urlAvatar} name={formatFullName(firstName, lastName)} />
        <TextHelper
          maxW={36}
          textOverflow="ellipsis"
          overflow="hidden"
          textTransform="capitalize">
          {formatFullName(firstName, lastName)}
        </TextHelper>
      </HStack>
    ),
    []
  );

  const renderAction = useCallback(
    () => <ActionDropdown actions={ACTION_MAPPING} onOpenModal={() => {}} />,
    []
  );

  const PATIENT_CONTENT_MAPPING = useCallback(
    (
      patient: Patient,
      renderPatientName: (
        firstName: string,
        lastName: string,
        urlAvatar: string
      ) => ReactNode,
      renderAction: () => ReactNode
    ) => {
      const {
        urlAvatar = '',
        firstName = '',
        lastName = '',
        department = '',
        appointmentDate = '',
        serialNumber = '',
        amount = 0
      } = patient || {};

      return [
        {
          customRender: () => renderPatientName(firstName, lastName, urlAvatar)
        },
        {
          value: department,
          cellStyle: {
            fontSize: 'md',
            lineHeight: '5',
            fontWeight: 'light',
            color: 'secondary.300',
            maxW: 20,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            textTransform: 'capitalize'
          }
        },
        {
          value: convertDateToDayMonthYear(appointmentDate),
          cellStyle: {
            fontSize: 'md',
            lineHeight: '5',
            fontWeight: 'light',
            color: 'secondary.300',
            maxW: 20,
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          }
        },
        {
          value: serialNumber,
          cellStyle: {
            fontSize: 'md',
            lineHeight: '5',
            fontWeight: 'light',
            color: 'secondary.300',
            maxW: 20,
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          }
        },
        {
          value: formatAmountCurrency(amount),
          cellStyle: {
            fontSize: 'md',
            lineHeight: '5',
            fontWeight: 'light',
            color: 'secondary.300',
            maxW: 20,
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          }
        },
        {
          customRender: renderAction
        }
      ];
    },
    []
  );

  const formatData = data.map((item) => {
    return PATIENT_CONTENT_MAPPING(item, renderPatientName, renderAction);
  });

  return (
    <Stack bg="light.300" p={{ base: 4, md: 7.5 }} borderRadius="xl">
      <HStack justifyContent="space-between">
        <Heading size="md" variant="secondary" alignItems="center">
          Patients
        </Heading>
        <HStack>
          <SearchBar
            onChange={() => {}}
            placeholder="Search here..."
            leftContent={<SearchIcon />}
          />
          <Button onClick={onOpenCreatePatientModal}>Add Patient</Button>
        </HStack>
      </HStack>
      <DataTable
        data={formatData}
        currentPage={currentPage}
        totalPage={totalPage}
        headingMapping={PATIENT_HEADING_MAPPING}
        isLoading={isLoading}
        onChangePage={onChangePage}
      />
    </Stack>
  );
};

export default memo(TablePatient);
