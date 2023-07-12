// actions.js
export const UPDATE_H2_VALUE = "UPDATE_H2_VALUE";

export const updateH2Value = (value) => ({
  type: UPDATE_H2_VALUE,
  payload: value,
});
