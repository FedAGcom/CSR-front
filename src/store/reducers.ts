import { combineReducers } from '@reduxjs/toolkit';
import { loginSlice } from './slices/loginSlice';
import appearanceSlice from './slices/appearanceSlice';
import packsSlice from './slices/packsSlice';
import userSlice from './slices/userSlice';
import { depositAPI } from './slices/depositSlice';
import packSlice from './slices/packSlice';
import winSlice from './slices/winSlice';

const rootReducer = combineReducers({
  // [slice.name]: reducer
  [loginSlice.reducerPath]: loginSlice.reducer,
  packs: packsSlice,
  packSlice: packSlice,
  winSlice: winSlice,
  userSlice: userSlice,
  appearance: appearanceSlice,
  [depositAPI.reducerPath]: depositAPI.reducer,
});

export { rootReducer };
