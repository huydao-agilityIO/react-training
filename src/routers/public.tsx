import { Outlet, RouteObject } from 'react-router-dom';

// Constants
import { ROUTE } from '@shared/constants';

// Pages
import { HomePage, LoginPage, RegisterPage } from '@shared/pages';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: ROUTE.REGISTER_PAGE,
        element: <RegisterPage />
      },
      {
        path: ROUTE.DASHBOARD,

        element: <HomePage />
      }
    ]
  }
];
