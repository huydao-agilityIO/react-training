import { Header } from '@shared/components';
import { useBreakpoints } from '@shared/hooks';
import { useDisclosure } from '@chakra-ui/react';
import { INVALID_INFO } from '@shared/constants';

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useDisclosure: jest.fn()
}));

jest.mock('@shared/hooks', () => ({
  useBreakpoints: jest.fn()
}));

describe('Header', () => {
  const setup = (fullName?: string, onSearchMock?: jest.Mock) => {
    const onSearch = onSearchMock ?? jest.fn();
    (useBreakpoints as jest.Mock).mockReturnValue({
      isLargeThan1024: false,
      isLargeThan768: true
    });
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn()
    });

    const utils = testLibReactUtils.render(
      <Header fullName={fullName} onSearch={onSearch} />
    );
    return { ...utils, onSearch };
  };

  it('should match snapshot', () => {
    const { container } = setup(INVALID_INFO.firstName);
    expect(container).toMatchSnapshot();
  });

  it('should call onSearch when input value changes', () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = setup(INVALID_INFO.firstName, onSearch);

    const inputElement = getByPlaceholderText('Search here...');
    testLibReactUtils.fireEvent.change(inputElement, {
      target: { value: 'test search' }
    });

    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('should not call onSearch when input value is empty', () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = setup(INVALID_INFO.firstName, onSearch);

    const inputElement = getByPlaceholderText('Search here...');
    testLibReactUtils.fireEvent.change(inputElement, { target: { value: '' } });

    expect(onSearch).toHaveBeenCalledTimes(0);
  });
});
