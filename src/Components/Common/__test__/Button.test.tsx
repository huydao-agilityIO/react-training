import chakraWrapper from './utils';

// Components
import Button from '../Button';

describe('Button Component', () => {
  it('match snapshot with primary variant', () => {
    const { asFragment } = chakraWrapper.render(
      <Button variant="solid" size="md">
        Click me primary
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('match snapshot with secondary variant', () => {
    const { asFragment } = chakraWrapper.render(
      <Button variant="secondary" size="md">
        Click me secondary
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders button with disabled state', () => {
    chakraWrapper.render(<Button isDisabled>Click me</Button>);

    const button = chakraWrapper.screen.getByRole('button', {
      name: /click me/i
    });

    expect(button).toBeDisabled();
  });

  it('shows spinner if isLoading', () => {
    const { getByTestId } = chakraWrapper.render(
      <Button data-testid="btn" isLoading>
        Login
      </Button>
    );
    expect(getByTestId('btn')).toHaveAttribute('data-loading');

    expect(chakraWrapper.screen.getByText('Login')).not.toBeVisible();

    chakraWrapper.screen.getByText('Loading...');
  });

  it('triggers click event when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = chakraWrapper.render(
      <Button onClick={mockOnClick}>Click me</Button>
    );
    const btn = getByText(/click me/i);

    chakraWrapper.fireEvent.click(btn);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
