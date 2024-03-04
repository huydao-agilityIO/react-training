import { MouseEventHandler, memo } from 'react';
import {
  Avatar,
  Button,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack
} from '@chakra-ui/react';

// Svg
import { LogoutIcon } from '@shared/SVG';

interface DropdownProps {
  fullName?: string;
  major?: string;
  isOpen?: boolean;
  onLogOut?: MouseEventHandler<HTMLButtonElement>;
  onOpen?: MouseEventHandler<HTMLButtonElement>;
  onClose?: () => void;
}

const Dropdown = ({
  fullName = '',
  major = 'management',
  isOpen = false,
  onLogOut,
  onOpen,
  onClose
}: DropdownProps) => {
  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <IconButton
          aria-label="show-dropdown"
          variant="default"
          icon={<Avatar size={{ base: 'sm', lg: 'lg' }} />}
          onClick={onOpen}
        />
      </PopoverTrigger>
      <PopoverContent
        p={7.5}
        w={52}
        bg="secondary.400"
        marginTop={{ sm: 0, md: 3 }}>
        <PopoverArrow bg="secondary.400" />
        <PopoverHeader>
          <VStack alignItems="flex-end" marginBottom={2}>
            <Text
              variant="secondary"
              size="xs"
              fontWeight="light"
              lineHeight="5"
              textTransform="capitalize">
              {major}
            </Text>
            <Heading
              color="light.300"
              fontSize="xs"
              fontWeight="medium"
              lineHeight="base"
              textTransform="capitalize">
              {fullName}
            </Heading>
          </VStack>
        </PopoverHeader>
        <PopoverBody>
          <VStack alignItems="flex-end">
            <Button
              variant="default"
              paddingX={0}
              color="light.300"
              rightIcon={<LogoutIcon />}
              onClick={onLogOut}>
              Log out
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default memo(Dropdown);
