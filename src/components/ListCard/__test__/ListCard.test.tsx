// Constants
import { HOSPITAL_STAFF } from '@shared/constants';

// Components
import { ListCard } from '@shared/components';

describe('List Card', () => {
  it('match list card with snap shot', () => {
    const { container } = testLibReactUtils.render(
      <ListCard cards={HOSPITAL_STAFF} />
    );

    expect(container).toMatchSnapshot();
  });
});
