import { createAction } from '@reduxjs/toolkit';

export const subscribeToNewsletter = createAction('news/subscribeToNewsletter', (email) => ({
  payload: email,
}));
