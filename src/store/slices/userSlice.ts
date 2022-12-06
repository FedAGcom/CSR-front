import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../api';
import { TAppDispatch } from '../store';
//import Cookies from 'js-cookie';

interface IUserState {
  isLoading: boolean;
  isAuth: boolean;
  error: string;
  user: any;
  promoMessage: string;
  favoritePackId: any;
  favoritePackIdAndCount: any;
}

const initialState: IUserState = {
  isLoading: false,
  isAuth: false,
  error: '',
  user: {},
  promoMessage: '',
  favoritePackId: 0,
  favoritePackIdAndCount: ''
};

export const fetchUser = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetching());
    const response = await $api.get(`api/v1/users`);
    dispatch(userSlice.actions.userFetchingSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.userFetchingError((e as Error).message));
  }
};

export const checkPromo = (name: string) => async (dispatch: TAppDispatch) => {
  try {
    const response = await $api.get(`api/v1/promo-codes/checkPromo?promo=${name}`);
    dispatch(userSlice.actions.createPromoSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.createPromoError((e as Error).message));
  }
};

export const createPromo = (obj : any) => async (dispatch: TAppDispatch) => {
  try {
    await $api.post(`api/v1/promo-codes/createPromo`, obj);
  } catch (e) {
    dispatch(userSlice.actions.createPromoError((e as Error).message));
  }
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<IUserState>) {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
      state.favoritePackId = Object.keys(action.payload.favoritePackIdAndCount || {})[0]
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    createPromoSuccess(state, action: PayloadAction<string>) {
      state.promoMessage = action.payload;
    },
    createPromoError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearMessage(state, action: PayloadAction<string>) {
      state.promoMessage = action.payload;
    },
  },
});

export const {clearMessage } = userSlice.actions

export default userSlice.reducer;
