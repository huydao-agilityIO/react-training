// Constants
import { INVALID_INFO } from '@shared/constants';

// Components
import { Header } from '@shared/components';

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

    const inputElement = testLibReactUtils.screen.getAllByRole('textbox');

    testLibReactUtils.fireEvent.change(inputElement[0], {
      target: { value: INVALID_INFO.firstName }
    });
    expect(onSearchMock).toHaveBeenCalled();
  });

  it('Not call onChange callback when input value changes to empty', () => {
    const onSearchMock = jest.fn();
    testLibReactUtils.render(<Header onSearch={onSearchMock} />);

    const inputElement = testLibReactUtils.screen.getAllByRole('textbox');

    testLibReactUtils.fireEvent.change(inputElement[0], {
      target: { value: '' }
    });
    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
