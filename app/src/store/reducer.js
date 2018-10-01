/**
 * InitialState
 */
const initialState = {
  loaded: false,
  data: [],
  image: 'http://la-communication.fr/wp-content/uploads/2018/04/food.jpg',
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
    case 'CHANGE_IMAGE':
      return {
        ...state,
        image: action.image
      };

    default:
      return state;
  }
};

export const handleImage = image => ({
  type: 'CHANGE_IMAGE',
  image,
});


/**
 * actionCreators
 */


/**
 * Export
 */
export default reducer;
