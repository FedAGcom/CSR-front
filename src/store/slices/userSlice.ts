import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../api';
import { TAppDispatch } from '../store';
//import Cookies from 'js-cookie';

interface IUserState {
  isLoading: boolean;
  isAuth: boolean;
  error: string;
  user: any;
}

const initialState: IUserState = {
  isLoading: false,
  isAuth: false,
  error: '',
  user: {},
};

export const fetchUser = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetching());
    const response = await $api.get(`api/v1/users`); //поменять на новый запрос
    //const response = await $api.get(`api/v1/auth/success_url?steam_id=${Cookies.get('steam_id')}`);
    dispatch(userSlice.actions.userFetchingSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.userFetchingError((e as Error).message));
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<object>) {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
