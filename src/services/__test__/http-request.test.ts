import { API_HOSPITAL_MANAGEMENT, METHOD } from '@shared/constants';
import { deleteData, getData, postData, putData } from '@shared/services';

const mockJson = jest.fn().mockReturnValue(Promise.resolve([]));
const mockFetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: mockJson,
    ok: true
  })
);

global.fetch = mockFetch;

describe('getData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // After the test, reset the mocks
  afterEach(() => {
    mockJson.mockRestore();
    mockFetch.mockRestore();
  });

  it('gets success', async () => {
    const responseData = { success: true };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(responseData)
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const data = await getData(API_HOSPITAL_MANAGEMENT.AUTHENTICATION_SIGN_IN);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      API_HOSPITAL_MANAGEMENT.AUTHENTICATION_SIGN_IN,
      {
        method: METHOD.GET
      }
    );
    expect(data).toEqual(responseData);
  });

  it('404 Not Found', async () => {
    const url = 'https://example.com/api/error';
    const mockResponse = {
      ok: false,
      text: jest.fn().mockResolvedValue('404 Not Found')
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    await expect(getData(url)).rejects.toEqual('404 Not Found');
  });
});

describe('postData', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('post success', async () => {
    const requestData = { key: 'value' };
    const responseData = { success: true };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(responseData)
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const result = await postData<typeof requestData>(
      API_HOSPITAL_MANAGEMENT.AUTHENTICATION_SIGN_IN,
      requestData
    );

    expect(global.fetch).toHaveBeenCalledWith(
      API_HOSPITAL_MANAGEMENT.AUTHENTICATION_SIGN_IN,
      {
        method: METHOD.POST,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      }
    );

    expect(result).toEqual(responseData);
  });

  it('post error', async () => {
    const requestData = { key: 'value' };
    const mockResponse = {
      ok: false,
      text: jest.fn().mockResolvedValue('test')
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const url = 'https://example.com/api/error';

    await expect(postData(url, requestData)).rejects.toEqual('test');
  });
});

describe('putData', () => {
  const id: number = 1;
  const url: string = `${API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_PATIENT}/${id}`;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('put success', async () => {
    const requestData = { key: 'value' };
    const responseData = { success: true };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(responseData)
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const result = await putData<typeof requestData>(url, requestData);

    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: METHOD.PUT,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });
    expect(result).toEqual(responseData);
  });

  it('put error', async () => {
    const url = 'https://example.com/api/error';
    const dataField = { key: '' };
    const mockResponse = {
      ok: false,
      text: jest.fn().mockResolvedValue('error message')
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    await expect(putData<typeof dataField>(url, dataField)).rejects.toEqual(
      'error message'
    );
  });
});

describe('deleteData', () => {
  const id: number = 1;
  const url: string = `${API_HOSPITAL_MANAGEMENT.HOSPITAL_MANAGEMENT_PATIENT}/${id}`;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('delete success', async () => {
    const responseData = { success: true };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(responseData)
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const result = await deleteData(url);

    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: METHOD.DELETE,
      headers: { 'Content-Type': 'application/json' }
    });

    expect(result).toEqual(responseData);
  });

  it('delete error', async () => {
    const url = 'https://example.com/api/error';
    const mockResponse = {
      ok: false,
      text: jest.fn().mockResolvedValue('error message')
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    await expect(deleteData(url)).rejects.toEqual('error message');
  });
});
