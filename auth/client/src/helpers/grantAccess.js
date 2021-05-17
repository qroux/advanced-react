export const grantAccess = (requireAuth, token) => {
  if (!requireAuth) return true;

  if (requireAuth) {
    return token ? token : false;
  }
};
