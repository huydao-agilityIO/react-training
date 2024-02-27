// Constants
import { RECENT_ACTIVITY } from '@shared/constants';

// Components
import { RecentActivityList } from '@shared/components';

describe('Recent Activity list', () => {
  it('match snap shot', () => {
    const { container } = testLibReactUtils.render(
      <RecentActivityList items={RECENT_ACTIVITY} />
    );

    expect(container).toMatchSnapshot();
  });
});
