import { BrowserRouter } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

// Constants
import { VALID_INFO } from '@shared/constants';

// Components
import RegisterForm from '.';

describe('RegisterForm', () => {
  const mockSubmitForm = jest.fn();
  const defaultValues = {
    fullName: '',
    email: '',
    password: ''
  };
  const { result } = testLibReactUtils.renderHook(() =>
    useForm({ defaultValues })
  );
  const ContainerRegisterForm = () => (
    <BrowserRouter>
      <FormProvider {...result.current}>
        <RegisterForm onSubmitForm={mockSubmitForm} />
      </FormProvider>
    </BrowserRouter>
  );

  it('renders correctly', () => {
    const { container } = testLibReactUtils.render(<ContainerRegisterForm />);

    expect(container).toMatchSnapshot();
  });

  it('submits the form with correct values', () => {
    const { getByPlaceholderText, getByText } = testLibReactUtils.render(
      <ContainerRegisterForm />
    );

    testLibReactUtils.fireEvent.change(getByPlaceholderText('First Name'), {
      target: { value: VALID_INFO.name }
    });
    testLibReactUtils.fireEvent.change(
      getByPlaceholderText('Enter your email'),
      {
        target: { value: VALID_INFO.email }
      }
    );
    testLibReactUtils.fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: VALID_INFO.password }
    });
    testLibReactUtils.fireEvent.submit(getByText('Sign up'));

    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
