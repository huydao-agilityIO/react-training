import { BrowserRouter } from 'react-router-dom';

// Constants
import { SIDEBAR_MAPPING } from '@shared/constants';

// Components
import { Sidebar } from '@shared/components';

describe('Sidebar component', () => {
  const RenderContainerSidebar = () => (
    <BrowserRouter>
      <Sidebar sidebarMapping={SIDEBAR_MAPPING} />
    </BrowserRouter>
  );

  it('Match snapshot for sidebar', () => {
    const { container } = testLibReactUtils.render(<RenderContainerSidebar />);

    expect(container).toMatchSnapshot();
  });
});
