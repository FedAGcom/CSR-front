import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './reducers';
import { statisticsSlise, loginSlice, depositAPI } from './slices/index';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginSlice.middleware, statisticsSlise.middleware, depositAPI.middleware),
});

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

const useAppSelector = <T>(selector: (state: TRootState) => T) => useSelector(selector);
const useAppDispatch: () => TAppDispatch = useDispatch;

export { store, useAppSelector, useAppDispatch };
export type { TRootState, TAppDispatch };
