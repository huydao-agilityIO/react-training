import { CreatePatientForm } from '@shared/components';

describe('CreatePatientForm', () => {
  const onCloseMock = jest.fn();
  const onSubmitMock = jest.fn();

  it('renders correctly', () => {
    const { container } = testLibReactUtils.render(
      <CreatePatientForm
        isOpen={false}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    );

    expect(container).toMatchSnapshot();
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
