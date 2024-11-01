// custom-instance.ts

const baseURL = 'http://localhost:3001'; // use your own URL here or environment variable

class ApiError extends Error {
  constructor(public data: unknown) {
    super('Api Error');
  }
}

export const createInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: HeadersInit;
  params?: Record<string, string>;
  data?: BodyType<unknown>;
  responseType?: string;
}): Promise<T> => {
  let targetUrl = `${baseURL}${url}`;

  if (params) {
    targetUrl += '?' + new URLSearchParams(params);
  }

  const response = await fetch(targetUrl, {
    method: method.toUpperCase(),
    credentials: 'include',
    headers,
    ...(data ? { body: JSON.stringify(data) } : {}),
  });

  if (!response.status.toString().startsWith('2')) {
    throw new ApiError(response);
  }
  return response.json();
};

export default createInstance;

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = Error;
// In case you want to wrap the body type (optional)
// (if the custom instance is processing data before sending it, like changing the case for example)
export type BodyType<BodyData> = BodyData;
