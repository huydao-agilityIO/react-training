// Constants
import { ERROR_MESSAGES_SERVICES, METHOD } from '@shared/constants';

/**
 * The function post data
 *
 * @param url - The API
 * @param data - The value
 */
export async function getData(url: string) {
  const response = await fetch(url, {
    method: METHOD.GET
  })
    .then((res) => {
      if (!res.ok) {
        return res.text();
      }
      return res.json();
    })
    .catch(() => {
      throw new Error(ERROR_MESSAGES_SERVICES.END_POINT);
    });

  return response;
}

/**
 * The function post data
 *
 * @param url - The API
 * @param data - The value
 */
export async function postData<T>(url: string, dataField: T) {
  const response = await fetch(url, {
    method: METHOD.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataField)
  })
    .then((res) => {
      if (!res.ok) {
        return res.text();
      }
      return res.json();
    })
    .catch(() => {
      throw new Error(ERROR_MESSAGES_SERVICES.END_POINT);
    });

  return response;
}
