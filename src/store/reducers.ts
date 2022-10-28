import { combineReducers } from '@reduxjs/toolkit';
import packsSlice from './slices/packsSlice';

const rootReducer = combineReducers({
  // [api.reducerPath]: api.reducer
  // [slice.name]: reducer
  packs: packsSlice,
});

export { rootReducer };
