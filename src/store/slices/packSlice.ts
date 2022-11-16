import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import $api from "../../api";
import { TAppDispatch } from "../store";

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
    price: number | null;
    packItemsList: IPackItemsList[];
}


const initialState: IPackState = {
    error: null,
    isLoading: false,
    id: null,
    title: '',
    price: null,
    packItemsList: []
}

export const fetchPack = (id: any) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(packSlice.actions.packFetching());
      const {data} = await $api.get<any>(`api/v1/packs/${id}`);
      console.log(data)
      dispatch(packSlice.actions.packFetchingSuccess(data));
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
            state.packItemsList = action.payload.packItemsList;
            //state.packItemsList = action.payload.packItemsList
          },
          packFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
          },

    }
})

export default packSlice.reducer;
