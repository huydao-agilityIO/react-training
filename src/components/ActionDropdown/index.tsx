import { memo } from 'react';
import {
  IconButton,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure
} from '@chakra-ui/react';

// Svg
import { EllipsisVertical } from '@shared/SVG';

interface Action {
  label: string;
  onClick?: () => void;
}

interface ActionDropdownProps {
  actions: Action[];
}

const ActionDropdown = ({ actions }: ActionDropdownProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
      <PopoverTrigger>
        <IconButton
          aria-label="show-dropdown"
          variant="default"
          color="secondary.150"
          _hover={{
            color: 'secondary.600'
          }}
          icon={<EllipsisVertical color="secondary.150" />}
          onClick={onOpen}
        />
      </PopoverTrigger>
      <PopoverContent w={{ base: 20, md: 40 }} paddingTop={3} paddingBottom={5}>
        <PopoverBody>
          <Stack>
            <List>
              {actions?.map(({ label, onClick }) => (
                <ListItem
                  fontSize="xs"
                  fontWeight="light"
                  color="secondary.200"
                  px={5}
                  py={1}
                  _hover={{
                    cursor: 'pointer',
                    color: 'primary.300'
                  }}
                  key={label}
                  onClick={onClick}>
                  {label}
                </ListItem>
              ))}
            </List>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default memo(ActionDropdown);
