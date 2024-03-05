import { MemoryRouter, Route, Routes } from 'react-router-dom';

// HOCs
import { withIsAuth, withIsUnAuth } from '@shared/hocs';

// Hooks
import { useAuth } from '@shared/hooks';

// Constants
import { ROUTE } from '@shared/constants';

// Types
import { ACTION } from '@shared/types';

const DASHBOARD = 'Dashboard page';
const LOGIN = 'Login Page';

const setupIsAuth = (memoryPath: string) => (
  <MemoryRouter initialEntries={[memoryPath]}>
    <Routes>
      <Route path={ROUTE.LOGIN_PAGE} element={<p>{LOGIN}</p>} />
      <Route
        path={ROUTE.DASHBOARD}
        Component={withIsAuth(() => (
          <p>{DASHBOARD}</p>
        ))}
      />
    </Routes>
  </MemoryRouter>
);

const setupIsUnAuth = (memoryPath: string) => (
  <MemoryRouter initialEntries={[memoryPath]}>
    <Routes>
      <Route
        path={ROUTE.LOGIN_PAGE}
        Component={withIsUnAuth(() => (
          <p>{LOGIN}</p>
        ))}
      />
      <Route path={ROUTE.DASHBOARD} element={<p>{DASHBOARD}</p>} />
    </Routes>
  </MemoryRouter>
);

describe('withIsAuth', () => {
  const mockUseAuth = useAuth as jest.Mock;

  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      state: { auth: { isAuth: false } },
      dispatch: jest.fn()
    });
  });

  it('No logged', () => {
    useAuth().dispatch({
      type: ACTION.LOG_IN,
      payload: { ...useAuth().state?.auth, isAuth: false }
    });
    const { getByText } = testLibReactUtils.render(setupIsAuth('/'));

    expect(getByText(LOGIN)).toBeDefined();
  });

  it('Logged', () => {
    useAuth().dispatch({
      type: ACTION.LOG_IN,
      payload: { ...useAuth().state?.auth, isAuth: true }
    });
    const { getByText } = testLibReactUtils.render(setupIsAuth('/'));

    expect(getByText(DASHBOARD)).toBeDefined();
  });
});

describe('withIsUnAuth', () => {
  it('No logged', () => {
    useAuth().dispatch({
      type: ACTION.LOG_IN,
      payload: { ...useAuth().state?.auth, isAuth: false }
    });
    const { getByText } = testLibReactUtils.render(
      setupIsUnAuth(ROUTE.LOGIN_PAGE)
    );

    expect(getByText(LOGIN)).toBeDefined();
  });

  it('Logged', () => {
    useAuth().dispatch({
      type: ACTION.LOG_IN,
      payload: { ...useAuth().state?.auth, isAuth: true }
    });
    const { getByText } = testLibReactUtils.render(
      setupIsUnAuth(ROUTE.LOGIN_PAGE)
    );

    expect(getByText(DASHBOARD)).toBeDefined();
  });
});
