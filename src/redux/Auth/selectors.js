export const selectIsLoggedIn = state => state.Auth.isLoggedIn;
export const selectIsRefreshing = state => state.Auth.isRefreshing;
export const selectUserName = state => state.Auth.name;
export const selectErrorReg = state => state.Auth.errorReg;
export const selectErrorLog = state => state.Auth.errorLog;
export const selectToken = state => state.Auth.token;

