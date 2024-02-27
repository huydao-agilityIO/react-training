import { ReactNode, memo, useCallback } from 'react';
import {
  Avatar,
  Center,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner
} from '@chakra-ui/react';

// Constants
import { PATIENT_HEADING_MAPPING } from '@shared/constants';

// Types
import { ContentMapping, Patient } from '@shared/types';

// Utils
import {
  convertDateToDayMonthYear,
  formatAmountCurrency,
  formatFullName
} from '@shared/utils';

// Components
import { ActionDropdown, DataTable, TextHelper } from '@shared/components';

interface TablePatientProps {
  data: Patient[];
  currentPage: number;
  totalPage: number;
  isLoading?: boolean;
  isLoadingOpenEditModal?: boolean;
  onOpenEditPatientModal?: (id: string) => void;
  onOpenDeletePatientModal?: (id: string) => void;
  onChangePage: (pageNumber: number) => void;
}

const TablePatient = ({
  data = [],
  currentPage,
  totalPage,
  isLoading = false,
  isLoadingOpenEditModal = false,
  onOpenEditPatientModal,
  onOpenDeletePatientModal,
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
    (id: string) => {
      const handleOpenEditPatientModal = () => onOpenEditPatientModal?.(id);
      const handleOpenDeletePatientModal = () => onOpenDeletePatientModal?.(id);
      const ACTION_MAPPING = [
        { label: 'Edit', onClick: handleOpenEditPatientModal },
        { label: 'Delete', onClick: handleOpenDeletePatientModal }
      ];

      return <ActionDropdown actions={ACTION_MAPPING} />;
    },
    [onOpenDeletePatientModal, onOpenEditPatientModal]
  );

  const PATIENT_CONTENT_MAPPING = useCallback(
    (
      patient: Patient,
      renderPatientName: (
        firstName: string,
        lastName: string,
        urlAvatar: string
      ) => ReactNode,
      renderAction?: (id: string) => ReactNode
    ): ContentMapping[] => {
      const {
        id = '',
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
          customRender: () => renderAction?.(id)
        }
      ];
    },
    []
  );

  const formatData = data.map((item) => {
    return PATIENT_CONTENT_MAPPING(item, renderPatientName, renderAction);
  });

  return (
    <>
      <DataTable
        data={formatData}
        currentPage={currentPage}
        totalPage={totalPage}
        headingMapping={PATIENT_HEADING_MAPPING}
        isLoading={isLoading}
        onChangePage={onChangePage}
      />
      <Modal isCentered isOpen={isLoadingOpenEditModal} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent bg="transparent" shadow="none">
          <ModalBody>
            <Center>
              <Spinner size="lg" />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(TablePatient);
