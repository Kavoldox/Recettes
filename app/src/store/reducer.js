/**
 * InitialState
 */
const initialState = {
  loaded: false,
  data: [],
};

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DATA_RECEIVED':
      return {
        ...state,
        data: action.data,
        loaded: true,
      };

    default:
      return state;
  }
};


/**
 * actionCreators
 */


/**
 * Export
 */
export default reducer;
