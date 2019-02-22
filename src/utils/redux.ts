export function createAction(options) {
  const { cb, type } = options;
  return dispatch => {
    dispatch({ type, payload: cb ? cb() : true });
    return true;
  };
}
