import { API_URL } from '@lusiaves/constants/constants';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const get = url => {
  // eslint-disable-next-line no-undef
  return fetch(API_URL + url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.value;
    })
    .catch(error => {
      console.error(error);
    });
};

export const post = (url, body) => {
  // eslint-disable-next-line no-undef
  return fetch(API_URL + url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      return error;
    });
};

// Create other request functions
