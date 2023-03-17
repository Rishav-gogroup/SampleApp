import {createContext} from 'react';

const Context = createContext({
  userToken: null,
  signIn: token => {},
  signOut: () => {},
  restoreToken: token => {},
});
export default Context;
