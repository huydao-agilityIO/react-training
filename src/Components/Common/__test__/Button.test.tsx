import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Button from '../Button';

describe('Button Component', () => {
  it('match snapshot', () => {
    const { asFragment } = render(<Button>Click me</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders button with disabled state', () => {
    render(<Button isDisabled>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeDisabled();
  });

  it('triggers click event when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button onClick={mockOnClick}>Click me</Button>
    );
    const btn = getByText(/click me/i);

    fireEvent.click(btn);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
