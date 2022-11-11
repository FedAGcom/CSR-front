import { combineReducers } from '@reduxjs/toolkit';
import { loginSlice } from './slices/loginSlice';
import packsSlice from './slices/packsSlice';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
  // [slice.name]: reducer
  [loginSlice.reducerPath]: loginSlice.reducer,
  packs: packsSlice,
  userSlice: userSlice,
});

export { rootReducer };
