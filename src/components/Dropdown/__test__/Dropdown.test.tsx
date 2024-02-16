// Constants
import { VALID_INFO } from '@shared/constants';

// Components
import { Dropdown } from '@shared/components';
import { formatFullName } from '@shared/utils';

describe('Dropdown', () => {
  it('matches the snapshot', () => {
    const { container } = testLibReactUtils.render(
      <Dropdown
        fullName={formatFullName(VALID_INFO.firstName, VALID_INFO.lastName)}
        isOpen={true}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should call onMouseEnter when the icon button is hovered', () => {
    const onMouseEnter = jest.fn();
    const { getByRole } = testLibReactUtils.render(
      <Dropdown
        fullName={formatFullName(VALID_INFO.firstName, VALID_INFO.lastName)}
        isOpen={false}
        onMouseEnter={onMouseEnter}
      />
    );
    const iconButton = getByRole('button');

    testLibReactUtils.fireEvent.mouseEnter(iconButton);
    expect(onMouseEnter).toHaveBeenCalled();
  });

  it('should call onMouseLeave when the icon button is no longer hovered', () => {
    const onMouseLeave = jest.fn();
    const { getByRole } = testLibReactUtils.render(
      <Dropdown
        fullName={formatFullName(VALID_INFO.firstName, VALID_INFO.lastName)}
        isOpen={false}
        onMouseLeave={onMouseLeave}
      />
    );
    const iconButton = getByRole('button');

    testLibReactUtils.fireEvent.mouseLeave(iconButton);
    expect(onMouseLeave).toHaveBeenCalled();
  });
});
