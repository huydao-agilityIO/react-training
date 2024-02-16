// Svg
import { SearchIcon } from '@shared/SVG';

// Constant
import { PATIENT } from '@shared/constants';

// Components
import { SearchBar } from '@shared/components';

describe('SearchBar component', () => {
  it('Match snapshot search bar with left icon', () => {
    const placeholder = 'Search here...';

    const { container } = testLibReactUtils.render(
      <SearchBar
        placeholder={placeholder}
        leftContent={<SearchIcon />}
        onChange={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('Match snapshot search bar with right icon', () => {
    const placeholder = 'Search here...';

    const { container } = testLibReactUtils.render(
      <SearchBar
        placeholder={placeholder}
        rightContent={<SearchIcon />}
        onChange={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onChange callback when input value changes', () => {
    const onChangeMock = jest.fn();

    testLibReactUtils.render(<SearchBar onChange={onChangeMock} />);

    const inputElement = testLibReactUtils.screen.getByRole('textbox');

    testLibReactUtils.fireEvent.change(inputElement, {
      target: { value: PATIENT.firstName }
    });
    expect(onChangeMock).toHaveBeenCalled();
  });

  it('Not call onChange callback when input value changes to empty', () => {
    const onChangeMock = jest.fn();

    testLibReactUtils.render(<SearchBar onChange={onChangeMock} />);

    const inputElement = testLibReactUtils.screen.getByRole('textbox');

    testLibReactUtils.fireEvent.change(inputElement, { target: { value: '' } });
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
