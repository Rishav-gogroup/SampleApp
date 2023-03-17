export default function SignupValidation(
  formState,
  setError,
  setErrorText,
  error,
  errorText,
) {
  if (formState.firstName == '') {
    setError({...error, ['firstName']: true});
    setErrorText({...errorText, ['firstName']: 'Please enter first name'});
  } else if (formState.lastName == '') {
    setError({...error, ['lastName']: true});
    setErrorText({...errorText, ['lastName']: 'Please enter last name'});
  } else if (formState.email == '') {
    setError({...error, ['email']: true});
    setErrorText({...errorText, ['email']: 'Please enter your email'});
  } else if (formState.password == '') {
    setError({...error, ['password']: true});
    setErrorText({...errorText, ['password']: 'Enter your password'});
  } else if (formState.password != formState.confirmPassword) {
    setError({...error, ['confirmPassword']: true});
    setErrorText({
      ...errorText,
      ['confirmPassword']: 'Password and confirm password do not match',
    });
  } else {
    return true;
  }
  return false;
}
