// Constants
import { METHOD } from '@shared/constants';

/**
 * The function get data
 *
 * @param url - The API
 */
export const getData = async (url: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response: Response = await fetch(url, {
      method: METHOD.GET
    });

    if (!response.ok) {
      const message: string = await response.text();
      throw message;
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

/**
 * The function post data
 *
 * @param url - The API
 * @param dataField - The value input
 */
export const postData = async <T>(url: string, dataField: T) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, {
      method: METHOD.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataField)
    });

    if (!response.ok) {
      const message: string = await response.text();
      throw message;
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

/**
 * The function put data
 *
 * @param url - The API
 * @param dataField - The value input
 */
export const putData = async <T>(url: string, dataField: T) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, {
      method: METHOD.PUT,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataField)
    });

    if (!response.ok) {
      const message: string = await response.text();
      throw message;
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

/**
 * The function delete data
 *
 * @param url - The API
 */
export const deleteData = async (url: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, {
      method: METHOD.DELETE,
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      const message: string = await response.text();
      throw message;
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
