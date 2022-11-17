import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../api';
import { TAppDispatch } from '../store';

export interface IWinState {
  error: string | null;
  isLoading: boolean;
  winId: string | number | null;
}

const initialState: IWinState = {
  winId: null,
  isLoading: false,
  error: '',
};

export const fetchWinId = (id: any) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(winSlice.actions.packFetching());
    const { data } = await $api.get<any>(`api/v1/spin/${id}`);
    dispatch(winSlice.actions.packFetchingSuccess(data));
  } catch (e) {
    dispatch(winSlice.actions.packFetchingError((e as Error).message));
  }
};

export const winSlice = createSlice({
  name: 'winId',
  initialState,
  reducers: {
    packFetching(state) {
      state.isLoading = true;
    },
    packFetchingSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = '';
      state.winId = action.payload;
    },
    packFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default winSlice.reducer;
