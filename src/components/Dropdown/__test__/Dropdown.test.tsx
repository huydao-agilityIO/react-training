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

  it('should call onOpen when the icon button is hovered', () => {
    const onOpen = jest.fn();
    const { getByRole } = testLibReactUtils.render(
      <Dropdown
        fullName={formatFullName(VALID_INFO.firstName, VALID_INFO.lastName)}
        isOpen={false}
        onOpen={onOpen}
      />
    );
    const iconButton = getByRole('button');

    testLibReactUtils.fireEvent.click(iconButton);
    expect(onOpen).toHaveBeenCalled();
  });
});
