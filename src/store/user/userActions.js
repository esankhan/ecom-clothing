import userTypes from "./usertTypes";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});
