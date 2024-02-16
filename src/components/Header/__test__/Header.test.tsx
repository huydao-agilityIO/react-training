// Constants
import { INVALID_INFO } from '@shared/constants';

// Components
import { Header } from '@shared/components';

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useDisclosure: jest.fn()
}));

window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: true,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn()
}));

describe('Header', () => {
  it('Match snapshot ', () => {
    const onSearchMock = jest.fn();
    const { container } = testLibReactUtils.render(
      <Header onSearch={onSearchMock}></Header>
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onChange callback when input value changes', () => {
    const onSearchMock = jest.fn();
    testLibReactUtils.render(<Header onSearch={onSearchMock} />);

    const inputElement = testLibReactUtils.screen.getByRole('textbox');

    testLibReactUtils.fireEvent.change(inputElement, {
      target: { value: INVALID_INFO.firstName }
    });
    expect(onSearchMock).toHaveBeenCalled();
  });

  it('Not call onChange callback when input value changes to empty', () => {
    const onSearchMock = jest.fn();
    testLibReactUtils.render(<Header onSearch={onSearchMock} />);

    const inputElement = testLibReactUtils.screen.getByRole('textbox');

    testLibReactUtils.fireEvent.change(inputElement, { target: { value: '' } });
    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
