import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../api';
import { TAppDispatch } from '../store';

interface IPack {
  id: number;
  name: string;
  email: string;
  title: string;
  [key: string]: any
}

interface IPackState {
  packs: IPack[];
  [key: string]: any;
  isLoading: boolean;
  error: string;
}

const initialState: IPackState = {
  packs: [],
  isLoading: false,
  error: '',
};

export const fetchPacks = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(packsSlice.actions.packsFetching());
    const {data} = await $api.get<any>(`api/v1/packs`);
    dispatch(packsSlice.actions.packsFetchingSuccess(data.content));
  } catch (e) {
    dispatch(packsSlice.actions.packsFetchingError((e as Error).message));
  }
};

export const packsSlice = createSlice({
  name: 'packs',
  initialState,
  reducers: {
    packsFetching(state) {
      state.isLoading = true;
    },
    packsFetchingSuccess(state, action: PayloadAction<IPack[]>) {
      state.isLoading = false;
      state.error = '';
      state.packs = action.payload;
    },
    packsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default packsSlice.reducer;
