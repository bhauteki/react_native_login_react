export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export function loginAction(email, accessToken) {
  return { type: LOGIN_ACTION, email, accessToken };
}

export function logoutAction() {
  return { type: LOGIN_ACTION };
}
