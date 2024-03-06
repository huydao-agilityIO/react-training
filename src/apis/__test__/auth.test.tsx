import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// Services
import * as services from '@shared/services';

// Apis
import { useSignInAuth, useSignUpAuth } from '@shared/apis';

jest.mock('@shared/services');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </BrowserRouter>
);

describe('useSignUpAuth', () => {
  it('sign up success', async () => {
    const responseData = { token: 'token' };
    jest.spyOn(services, 'postData').mockResolvedValue(responseData);
    const { result } = testLibReactUtils.renderHook(() => useSignUpAuth(), {
      wrapper
    });

    const Authentication = {
      _id: '1',
      firstName: 'unit',
      lastName: 'test',
      email: 'unit_test@gmail.com',
      avatarURL: '',
      password: '123123Uu'
    };

    testLibReactUtils.act(() => {
      return result.current.mutate(Authentication);
    });

    await testLibReactUtils.waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual(responseData);
  });

  it('should return an error from the server', async () => {
    const errorResponse = { error: 'Invalid credentials' };
    jest.spyOn(services, 'postData').mockRejectedValue(errorResponse);
    const { result } = testLibReactUtils.renderHook(() => useSignUpAuth(), {
      wrapper
    });
    const Authentication = {
      _id: '1',
      firstName: 'unit',
      lastName: 'test',
      email: 'unit_test@gmail.com',
      avatarURL: '',
      password: 'inValid_password'
    };

    testLibReactUtils.act(() => {
      result.current.mutate(Authentication);
    });

    await testLibReactUtils.waitFor(() => {
      return result.current.isError;
    });

    expect(result.current.isError).toBe(true);
    expect(result.current.error).toEqual(errorResponse);
  });
});

describe('useSignInAuth', () => {
  it('sign in success', async () => {
    const responseData = { token: 'token' };
    jest.spyOn(services, 'postData').mockResolvedValue(responseData);
    const { result } = testLibReactUtils.renderHook(() => useSignInAuth(), {
      wrapper
    });

    const Authentication = {
      _id: '1',
      firstName: 'unit',
      lastName: 'test',
      email: 'unit_test@gmail.com',
      avatarURL: '',
      password: '123123Uu'
    };

    testLibReactUtils.act(() => {
      return result.current.mutate(Authentication);
    });

    await testLibReactUtils.waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual(responseData);
  });

  it('should return an error from the server', async () => {
    const errorResponse = { error: 'Invalid credentials' };
    jest.spyOn(services, 'postData').mockRejectedValue(errorResponse);
    const { result } = testLibReactUtils.renderHook(() => useSignInAuth(), {
      wrapper
    });
    const Authentication = {
      _id: '1',
      firstName: 'unit',
      lastName: 'test',
      email: 'unit_test@gmail.com',
      avatarURL: '',
      password: 'inValid_password'
    };

    testLibReactUtils.act(() => {
      result.current.mutate(Authentication);
    });

    await testLibReactUtils.waitFor(() => {
      return result.current.isError;
    });

    expect(result.current.isError).toBe(true);
    expect(result.current.error).toEqual(errorResponse);
  });
});
