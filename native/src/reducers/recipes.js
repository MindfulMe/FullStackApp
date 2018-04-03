import Store from '../store/recipes';

export const initialState = Store;

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
