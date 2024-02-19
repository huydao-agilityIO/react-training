import { INVALID_INFO } from '@shared/constants';
import { DashboardLayout } from '@shared/layouts';
import { BrowserRouter } from 'react-router-dom';

describe('Dashboard Layout', () => {
  const onSearchMock = jest.fn();

  const RenderWrapperDashboardLayout = () => (
    <BrowserRouter>
      <DashboardLayout onSearch={onSearchMock}>test</DashboardLayout>
    </BrowserRouter>
  );

  it('Match snapshot ', () => {
    const { container } = testLibReactUtils.render(
      <RenderWrapperDashboardLayout />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onChange callback when input value changes', () => {
    testLibReactUtils.render(<RenderWrapperDashboardLayout />);

    const inputElement = testLibReactUtils.screen.getAllByRole('textbox');

    testLibReactUtils.fireEvent.change(inputElement[0], {
      target: { value: INVALID_INFO.firstName }
    });
    expect(onSearchMock).toHaveBeenCalled();
  });

  it('Not call onChange callback when input value changes to empty', () => {
    const onSearchMock = jest.fn();

    testLibReactUtils.render(<RenderWrapperDashboardLayout />);

    const inputElement = testLibReactUtils.screen.getAllByRole('textbox');

    testLibReactUtils.fireEvent.change(inputElement[0], {
      target: { value: '' }
    });
    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
