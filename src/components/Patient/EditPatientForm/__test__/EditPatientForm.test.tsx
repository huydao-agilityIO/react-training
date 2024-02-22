import { FormProvider, useForm } from 'react-hook-form';
import { useDisclosure } from '@chakra-ui/react';

// Types
import { Patient } from '@shared/types';

// Constants
import { PATIENT } from '@shared/constants';

// Components
import { EditPatientForm } from '@shared/components';

const useDisclosureMock = useDisclosure as jest.Mock;

describe('EditPatientForm', () => {
  const onCloseMock = jest.fn();
  const onSubmitMock = jest.fn();
  const { result } = testLibReactUtils.renderHook(() => useForm<Patient>({}));
  const EditPatientFormContainer = () => (
    <FormProvider {...result.current}>
      <EditPatientForm
        isOpen={true}
        isLoadingFetchDataInitial={false}
        dataPatientById={PATIENT}
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
      <EditPatientFormContainer />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onClose when the close button is clicked', () => {
    const { getByLabelText } = testLibReactUtils.render(
      <EditPatientFormContainer />
    );
    const closeButton = getByLabelText('Close');

    testLibReactUtils.fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('Not calls onSubmit when the submit button is clicked', () => {
    const onSubmitMock = jest.fn();
    const { getByText, getByPlaceholderText } = testLibReactUtils.render(
      <EditPatientFormContainer />
    );
    const submitButton = getByText('Submit');
    const inputElement = getByPlaceholderText('Amount');

    testLibReactUtils.fireEvent.change(inputElement, {
      target: { value: '' }
    });
    testLibReactUtils.fireEvent.click(submitButton);
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
