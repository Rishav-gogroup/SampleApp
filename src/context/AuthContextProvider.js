import React, {useReducer, useEffect} from 'react';
import Context from './context';
import actionTypes from './actionTypes';
import EncryptedStorage from 'react-native-encrypted-storage';
const reducer = (state, action) => {
  const newState = {...state};
  switch (action.type) {
    case actionTypes.SIGN_IN:
      newState.userToken = action.payload.token;
      break;
    case actionTypes.SIGN_OUT:
      EncryptedStorage.removeItem('userToken');
      newState.userToken = null;
      break;
    case actionTypes.RESTORE_TOKEN:
      newState.userToken = action.payload.token;
      break;
  }
  return {...newState};
};

export default function AuthContextProvider({children}) {
  const signIn = token => {
    dispatch({type: actionTypes.SIGN_IN, payload: {token}});
  };
  const signOut = () => {
    dispatch({type: actionTypes.SIGN_OUT});
  };
  const restoreToken = token => {
    dispatch({
      type: actionTypes.RESTORE_TOKEN,
      payload: {token},
    });
  };
  const initialState = {
    userToken: null,
    signIn,
    signOut,
    restoreToken,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={state}>{children}</Context.Provider>;
}
