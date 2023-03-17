export default function LoginValidation(
  formState,
  setError,
  setErrorText,
  error,
  errorText,
) {
  if (formState.email == '') {
    setError({...error, ['email']: true});
    setErrorText({...errorText, ['email']: 'Please enter your email'});
  } else if (formState.password == '') {
    setError({...error, ['password']: true});
    setErrorText({...errorText, ['password']: 'Enter your password'});
  } else {
    return true;
  }
  return false;
}
