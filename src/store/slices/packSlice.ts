import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../api';
import { TAppDispatch } from '../store';

export interface IPackItemsList {
  id: number;
  type: string;
  title: string;
  rare: string;
  quality: string;
  price: number;
  iconItemId?: number;
  winchance: number;
}

export interface IPackState {
  error: string | null;
  isLoading: boolean;
  id: number | null;
  title: string | null;
  price: number;
  image: string | null;
  packItemsList: IPackItemsList[];
  favoritePack: any,
  bestItemIdAndPrice: any,
}

const initialState: IPackState = {
  error: null,
  isLoading: false,
  id: null,
  title: '',
  price: 0,
  image: null,
  packItemsList: [],
  favoritePack: {},
  bestItemIdAndPrice: {},
};

export const fetchItemById = (id: any) => async (dispatch: TAppDispatch) => {
  const { data } = await $api.get<any>(`api/v1/items/${id}`);
  dispatch(packSlice.actions.BestItem(data));
}

export const fetchPack = (id: any) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(packSlice.actions.packFetching());
    const { data } = await $api.get<any>(`api/v1/packs/${id}`);
    dispatch(packSlice.actions.packFetchingSuccess(data));
  } catch (e) {
    dispatch(packSlice.actions.packFetchingError((e as Error).message));
  }
};

export const fetchFavoritePack = (id: any) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(packSlice.actions.packFetching());
    const { data } = await $api.get<any>(`api/v1/packs/${id}`);
    dispatch(packSlice.actions.FavoritePackFetchingSuccess(data));
  } catch (e) {
    dispatch(packSlice.actions.packFetchingError((e as Error).message));
  }
};

export const packSlice = createSlice({
  name: 'pack',
  initialState,
  reducers: {
    packFetching(state) {
      state.isLoading = true;
    },
    packFetchingSuccess(state, action: PayloadAction<IPackState>) {
      state.isLoading = false;
      state.error = '';
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.image = action.payload.image;
      state.packItemsList = action.payload.packItemsList;
    },
    packFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    FavoritePackFetchingSuccess(state, action: PayloadAction<IPackState>) {
      state.isLoading = false;
      state.error = '';
      state.favoritePack = action.payload;
    },
    BestItem(state, action:PayloadAction<IPackState>) {
      state.bestItemIdAndPrice = action.payload
    }
  },
});

export default packSlice.reducer;
