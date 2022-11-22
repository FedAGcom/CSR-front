import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FieldValues } from 'react-hook-form';
import { store } from "../store";
import Cookies from 'js-cookie';

type TErrorMessage ={
    message:string
}

export type TAppearanceSettings = {
    id: number,
    activeWindow: boolean,
    buttonText: string,
    colorBackground: string,
    colorBackgroundOne: string,
    colorBackgroundTwo: string,
    colorButton: string,
    colorButtons: string,
    colorFooterDown: string,
    colorFooterUp: string,
    colorHeaderLeft: string,
    colorHeaderRight: string,
    backgroundCase: string | null,
    backgroundMainBottom: string | null,
    footerLogo: string | null,
    headerLogo: string | null,
    textImage: string |null ,
    titleText: string,
    windowTextTwo: string
}

export type TInitialState= {
    appearanceSettings: TAppearanceSettings;
    status: string;
    error: string | unknown;
  }

  const initialState:TInitialState ={
    appearanceSettings:{} as TAppearanceSettings,
    status: '',
    error: ''
} 

const baseURL = 'http://csgofarm.online:8080/api/v1/front'  

export const getSettings = createAsyncThunk(
    'appearance/getSettings',
    async (_,{rejectWithValue})=>{
try {
    const res = await axios.get(`${baseURL}`)
    return res.data
} catch (error) {
    return rejectWithValue((error as TErrorMessage).message)
}
    }
)





const token: string | undefined = Cookies.get('AuthorizationCSRApp');
export const sendSettings = createAsyncThunk(
    'appearance/sendSettings',
    async (data:FieldValues, { rejectWithValue, getState })=>{
        const currentState:typeof store.getState.arguments = getState()
        const formData = new FormData();
        formData.append('textImage', currentState.appearance.appearanceSettings.textImage );
        formData.append('headerLogo', currentState.appearance.appearanceSettings.headerLogo);
        formData.append('backgroundCase', currentState.appearance.appearanceSettings.backgroundCase);
        formData.append('footerLogo', currentState.appearance.appearanceSettings.footerLogo);
        formData.append('backgroundMainBottom', currentState.appearance.appearanceSettings.backgroundMainBottom);
        formData.append('activeWindow', data.activeWindow);
        formData.append('buttonText', data.buttonText);
        formData.append('colorBackground', data.colorBackground);
        formData.append('colorBackgroundOne', data.colorBackgroundOne);
        formData.append('colorBackgroundTwo', data.colorBackgroundTwo);
        formData.append('colorButton', data.colorButton);
        formData.append('colorButtons', data.colorButtons);
        formData.append('colorFooterDown', data.colorFooterDown);
        formData.append('colorFooterUp', data.colorFooterUp);
        formData.append('colorHeaderLeft', data.colorHeaderLeft);
        formData.append('colorHeaderRight', data.colorHeaderRight);
        formData.append('titleText', data.titleText);
        formData.append('windowTextTwo', data.windowTextTwo);
        try {
            await axios.put(baseURL,formData,
                    {
                           headers: { 
                                       'Content-Type': 'application/json',                         
                                       'Authorization': `${token}`
                                   },
                               })   

            }   catch (error) {
            return rejectWithValue((error as TErrorMessage).message)
            }
   }
)



 export const appearanceSlice = createSlice({
    name: 'appearance',
    initialState,
    reducers:{
        getTextImage:(state, action)=>{
        state.appearanceSettings.textImage = action.payload
        },
        getHeaderLogo:(state, action)=>{
            state.appearanceSettings.headerLogo = action.payload
        },
        getBackgroundCase:(state, action)=>{
            state.appearanceSettings.backgroundCase = action.payload
        },
        getFooterLogo:(state, action)=>{
            state.appearanceSettings.footerLogo = action.payload
        },
        getBackgroundMainBottom:(state, action)=>{
            state.appearanceSettings.backgroundMainBottom = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getSettings.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getSettings.fulfilled, (state, action) => {
            state.status = 'resolved'
            state.appearanceSettings = action.payload
        })
        builder.addCase(getSettings.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        builder.addCase(sendSettings.pending, (state) => {
            state.status = 'sending'
        })
        builder.addCase(sendSettings.fulfilled, (state) => {
            state.status = 'loaded'
        })
        builder.addCase(sendSettings.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
      },
    
})

export const {getTextImage, getHeaderLogo, getBackgroundCase, getFooterLogo, getBackgroundMainBottom} = appearanceSlice.actions
export default appearanceSlice.reducer
