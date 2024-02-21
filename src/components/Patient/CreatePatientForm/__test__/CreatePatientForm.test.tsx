import { FormProvider, useForm } from 'react-hook-form';
import { useDisclosure } from '@chakra-ui/react';

// Types
import { Patient } from '@shared/types';

// Constants
import { PATIENT } from '@shared/constants';

// Components
import { CreatePatientForm } from '@shared/components';

const useDisclosureMock = useDisclosure as jest.Mock;

describe('CreatePatientForm', () => {
  const onCloseMock = jest.fn();
  const onSubmitMock = jest.fn();
  const { result } = testLibReactUtils.renderHook(() => useForm<Patient>({}));
  const CreatePatientFormContainer = () => (
    <FormProvider {...result.current}>
      <CreatePatientForm
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    </FormProvider>
  );

  beforeEach(() => {
    useDisclosureMock.mockReturnValue({
      isOpen: false,
      onClose: onCloseMock
    });
  });

  it('renders correctly', () => {
    const { container } = testLibReactUtils.render(
      <CreatePatientFormContainer />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onClose when the close button is clicked', () => {
    const { getByLabelText, getByPlaceholderText } = testLibReactUtils.render(
      <CreatePatientFormContainer />
    );
    const closeButton = getByLabelText('Close');
    const inputElement = getByPlaceholderText('First Name');

    testLibReactUtils.fireEvent.change(inputElement, {
      target: { value: PATIENT.firstName }
    });

    testLibReactUtils.fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onSubmit when the submit button is clicked', () => {
    const { getByText, getByPlaceholderText } = testLibReactUtils.render(
      <CreatePatientFormContainer />
    );
    const submitButton = getByText('Submit');
    const inputElement = getByPlaceholderText('First Name');

    testLibReactUtils.fireEvent.change(inputElement, {
      target: { value: '' }
    });
    testLibReactUtils.fireEvent.click(submitButton);
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
