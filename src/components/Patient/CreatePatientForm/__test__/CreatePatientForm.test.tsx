import { useDisclosure } from '@chakra-ui/react';

// Components
import { CreatePatientForm } from '@shared/components';

const useDisclosureMock = useDisclosure as jest.Mock;

describe('CreatePatientForm', () => {
  const onCloseMock = jest.fn();
  const onSubmitMock = jest.fn();

  beforeEach(() => {
    useDisclosureMock.mockReturnValue({
      isOpen: false,
      onClose: onCloseMock
    });
  });

  it('renders correctly', () => {
    const { container } = testLibReactUtils.render(
      <CreatePatientForm
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onClose when the close button is clicked', () => {
    const { getByLabelText } = testLibReactUtils.render(
      <CreatePatientForm
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    );
    const closeButton = getByLabelText('Close');

    testLibReactUtils.fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onSubmit when the submit button is clicked', () => {
    const { getByText } = testLibReactUtils.render(
      <CreatePatientForm
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    );
    const submitButton = getByText('Submit');

    testLibReactUtils.fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalled();
  });
});
