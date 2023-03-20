import Config from 'react-native-config';

export const postLogin = async body => {
  const requestOptions = {
    method: 'POST',
    Accept: 'application/json',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };
  const response = await fetch(
    Config.API_BASE_URL + '/auth/login',
    requestOptions,
  )
    .then(res => res.json())
    .then(json => {
      return json;
    });
  return response;
};
export const postSignup = async body => {
  const requestOptions = {
    method: 'POST',
    Accept: 'application/json',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };
  const response = await fetch(
    Config.API_BASE_URL + '/auth/signup',
    requestOptions,
  )
    .then(res => res.json())
    .then(json => {
      return json;
    });
  return response;
};
