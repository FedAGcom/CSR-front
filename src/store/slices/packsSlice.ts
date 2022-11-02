import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TAppDispatch } from '../store';

interface IPack {
  id: number;
  name: string;
  email: string;
}

interface IPackState {
  packs: IPack[];
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
    dispatch(packSlice.actions.packsFetching());
    const response = await axios.get<IPack[]>('http://5.101.51.15/api/v1/packs', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTcGVybyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY2ODA5MjEyLCJleHAiOjE2Njc0MTQwMTJ9.Bpn1MZqracUl2_D2yK4YDdlANKycpuqIyuVkhbCTKbE',
      },
    });
    dispatch(packSlice.actions.packsFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(packSlice.actions.packsFetchingError(e.message));
  }
};

export const packSlice = createSlice({
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

export default packSlice.reducer;
