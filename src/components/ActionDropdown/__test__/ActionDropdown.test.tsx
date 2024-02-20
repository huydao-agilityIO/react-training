import { useDisclosure } from '@chakra-ui/react';

// Constants
import { ACTION_MAPPING } from '@shared/constants';

// Components
import { ActionDropdown } from '@shared/components';

const useDisclosureMock = useDisclosure as jest.Mock;

describe('ActionDropdown', () => {
  const onOpenModal = jest.fn();

  beforeEach(() => {
    useDisclosureMock.mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn()
    });
  });

  it('renders correctly', () => {
    const { container } = testLibReactUtils.render(
      <ActionDropdown actions={ACTION_MAPPING} onOpenModal={onOpenModal} />
    );
    expect(container).toMatchSnapshot();
  });

  it('calls onOpenModal when an action is clicked', () => {
    const { getByText } = testLibReactUtils.render(
      <ActionDropdown actions={ACTION_MAPPING} onOpenModal={onOpenModal} />
    );

    testLibReactUtils.fireEvent.click(getByText('Edit'));
    expect(onOpenModal).toHaveBeenCalled();
  });
});
