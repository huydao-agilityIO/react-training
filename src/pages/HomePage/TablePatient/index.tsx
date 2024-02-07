import { ReactNode, useCallback } from 'react';
import { Avatar, HStack, IconButton } from '@chakra-ui/react';

// Constants
import { PATIENT_HEADING_MAPPING } from '@shared/constants';

// Types
import { Patient } from '@shared/types';

// Utils
import {
  convertDateToDayMonthYear,
  formatAmountCurrency,
  formatFullName
} from '@shared/utils';

// Components
import { DataTable, EllipsisVertical, TextHelper } from '@shared/components';

interface TablePatientProps {
  data: Patient[];
  isLoading?: boolean;
}

const TablePatient = ({ data = [], isLoading = false }: TablePatientProps) => {
  const renderPatientName = useCallback(
    (firstName: string, lastName: string, urlAvatar: string) => (
      <HStack spacing={5}>
        <Avatar src={urlAvatar} name={formatFullName(firstName, lastName)} />
        <TextHelper maxW={36} textOverflow="ellipsis" overflow="hidden">
          {formatFullName(firstName, lastName)}
        </TextHelper>
      </HStack>
    ),
    []
  );

  const renderAction = useCallback(
    () => (
      <IconButton
        variant="default"
        aria-label="show-dropdown"
        icon={<EllipsisVertical />}
      />
    ),
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
            overflow: 'hidden'
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
    <DataTable
      headingMapping={PATIENT_HEADING_MAPPING}
      data={formatData}
      isLoading={isLoading}
    />
  );
};

export default TablePatient;
