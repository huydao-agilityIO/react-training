import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// Apis
import { useGetTablePatient } from '@shared/apis';

// Services
import * as services from '@shared/services';
import { PATIENT } from '@shared/constants';

jest.mock('@shared/services');
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useGetTablePatient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetch success', async () => {
    jest.spyOn(services, 'getData').mockRejectedValue(PATIENT);

    const { result } = testLibReactUtils.renderHook(
      () => useGetTablePatient(),
      {
        wrapper
      }
    );

    await testLibReactUtils.waitFor(() => result.current.isSuccess);

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual(PATIENT);
  });
});
