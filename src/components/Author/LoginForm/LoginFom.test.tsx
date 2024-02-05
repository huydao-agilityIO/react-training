import { FormProvider, useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';

// Constants
import { VALID_INFO } from '@shared/constants';

// Types
import { Authentication } from '@shared/types';

// Components
import LoginForm from '.';

// TODO: Update later
describe('LoginForm', () => {
  const mockSubmitForm = jest.fn();
  const defaultValues: Partial<Authentication> = {
    email: '',
    password: ''
  };
  const { result } = testLibReactUtils.renderHook(() =>
    useForm<Partial<Authentication>>({ defaultValues })
  );
  const ContainerLoginForm = () => (
    <BrowserRouter>
      <FormProvider {...result.current}>
        <LoginForm onSubmitForm={mockSubmitForm} />
      </FormProvider>
    </BrowserRouter>
  );

  it('renders correctly', () => {
    const { container } = testLibReactUtils.render(<ContainerLoginForm />);

    expect(container).toMatchSnapshot();
  });

  it('submits the form with correct values', () => {
    const { getByPlaceholderText, getByText } = testLibReactUtils.render(
      <ContainerLoginForm />
    );

    testLibReactUtils.fireEvent.change(
      getByPlaceholderText('Enter your email'),
      {
        target: { value: VALID_INFO.email }
      }
    );

    testLibReactUtils.fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: VALID_INFO.password }
    });
    testLibReactUtils.fireEvent.submit(getByText('Log In'));

    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
