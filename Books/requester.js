const username = 'Nikolay';
const password = 'Nikata';

const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_SkpptEuhS';
const appSecret = 'b63f2f79c055420fab642990fa22e7f7 ';

function makeHeaders(httpMethod, data) {
  const headers = {
    method: httpMethod,
    headers: {
      'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
      'Content-type': 'application/json'
    }
  };

  if (httpMethod === 'POST' || httpMethod === 'PUT') {
    headers.body = JSON.stringify(data);
  }

  return headers;
}

function handleError(e) {
  if (!e.ok) {
    throw new Error(e.statusText);
  }
  return e;
}

function serializzeData(x) {
  return x.json();
}

function fetchData(kinveyModule, endpoint, headers) {
  const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

  return fetch(url, headers)
    .then(handleError)
    .then(serializzeData);
}

export function get(kinveyModule, endpoint) {
  const headers = makeHeaders('GET');

  return fetchData(kinveyModule, endpoint, headers);
}

export function post(kinveyModule, endpoint, data) {
  const headers = makeHeaders('POST', data);

  return fetchData(kinveyModule, endpoint, headers);
}

export function put(kinveyModule, endpoint, data) {
  const headers = makeHeaders('PUT', data);

  return fetchData(kinveyModule, endpoint, headers);
}

export function del(kinveyModule, endpoint, data) {
  const headers = makeHeaders('DELETE');

  return fetchData(kinveyModule, endpoint, headers);
}
