import {
  loginSlice,
  combineReducers,
  appearanceSlice,
  packsSlice,
  userSlice,
  depositAPI,
  packSlice,
  winSlice,
  statisticsSlise,
} from './slices/index';

const rootReducer = combineReducers({
  // [slice.name]: reducer
  [loginSlice.reducerPath]: loginSlice.reducer,
  [statisticsSlise.reducerPath]: statisticsSlise.reducer,
  packs: packsSlice,
  packSlice: packSlice,
  winSlice: winSlice,
  userSlice: userSlice,
  appearance: appearanceSlice,
  [depositAPI.reducerPath]: depositAPI.reducer,
});

export { rootReducer };
