import { ReactNode, memo } from 'react';
import {
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from '@chakra-ui/react';

// Components
import { TextErrorMessage } from '@shared/components';

interface PatientFormContainerProps {
  isOpen: boolean;
  body: ReactNode;
  idForm?: string;
  errorResponseAPI?: string;
  heading?: string;
  footer?: ReactNode;
  onClose: () => void;
}

const PatientFormContainer = ({
  isOpen,
  body,
  idForm = '',
  errorResponseAPI = '',
  heading = '',
  footer = '',
  onClose
}: PatientFormContainerProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent w={{ base: 'xs', md: 'md' }}>
      <ModalHeader>
        <Stack w="full">
          <Heading textTransform="capitalize">{heading}</Heading>
          {errorResponseAPI && (
            <TextErrorMessage>{errorResponseAPI}</TextErrorMessage>
          )}
        </Stack>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Flex as="form" id={idForm} gap={5} direction="column">
          {body}
        </Flex>
      </ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </ModalContent>
  </Modal>
);

export default memo(PatientFormContainer);
