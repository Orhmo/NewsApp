import { createReducer, createAction } from '@reduxjs/toolkit';

// Action
export const subscribeToNewsletter = createAction('news/subscribeToNewsletter', (email) => ({
  payload: email,
}));

// Reducer
const initialState = {
  isSubscribed: false,
  subscribedEmail: '',
};

const newsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(subscribeToNewsletter, (state, action) => {
      state.isSubscribed = true;
      state.subscribedEmail = action.payload;
    });
});

export default newsReducer;
