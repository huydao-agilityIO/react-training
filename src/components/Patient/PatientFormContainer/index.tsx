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
  heading: string;
  body: ReactNode;
  idForm?: string;
  errorResponseAPI?: string;
  footer?: ReactNode;
  onClose: () => void;
}

const PatientFormContainer = ({
  isOpen,
  body,
  heading,
  idForm = '',
  errorResponseAPI = '',
  footer = '',
  onClose
}: PatientFormContainerProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent w={{ base: 'xs', md: 'md' }} minHeight="lg">
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
      {footer && <ModalFooter>{footer}</ModalFooter>}
    </ModalContent>
  </Modal>
);

export default memo(PatientFormContainer);
