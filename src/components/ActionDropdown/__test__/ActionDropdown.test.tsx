import { useDisclosure } from '@chakra-ui/react';

// Components
import { ActionDropdown } from '@shared/components';

const useDisclosureMock = useDisclosure as jest.Mock;

describe('ActionDropdown', () => {
  const onOpenModal = jest.fn();
  const ACTION_MAPPING = [
    {
      label: 'Edit',
      onClick: onOpenModal
    }
  ];

  beforeEach(() => {
    useDisclosureMock.mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn()
    });
  });

  it('renders correctly', () => {
    const { container } = testLibReactUtils.render(
      <ActionDropdown actions={ACTION_MAPPING} />
    );
    expect(container).toMatchSnapshot();
  });

  it('calls onOpenModal when an action is clicked', () => {
    const { getByText } = testLibReactUtils.render(
      <ActionDropdown actions={ACTION_MAPPING} />
    );

    testLibReactUtils.fireEvent.click(getByText('Edit'));
    expect(onOpenModal).toHaveBeenCalled();
  });
});
