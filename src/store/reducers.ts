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
  supportSlice,
} from './slices/index';

const rootReducer = combineReducers({
  [loginSlice.reducerPath]: loginSlice.reducer,
  [statisticsSlise.reducerPath]: statisticsSlise.reducer,
  [supportSlice.reducerPath]: supportSlice.reducer,
  packs: packsSlice,
  packSlice: packSlice,
  winSlice: winSlice,
  userSlice: userSlice,
  appearance: appearanceSlice,
  [depositAPI.reducerPath]: depositAPI.reducer,
});

export { rootReducer };
