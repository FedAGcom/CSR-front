import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type TErrorMessage = {
  message: string;
};

export type TAppearanceSettings = {
  id: number;
  activeWindow: boolean;
  buttonText: string;
  colorBackground: string;
  colorBackgroundOne: string;
  colorBackgroundTwo: string;
  colorButton: string;
  colorButtons: string;
  colorFooterDown: string;
  colorFooterUp: string;
  colorHeaderLeft: string;
  colorHeaderRight: string;
  backgroundCase: string | null;
  backgroundMainBottom: string | null;
  footerLogo: string | null;
  headerLogo: string | null;
  textImage: string | null;
  titleText: string;
  windowTextTwo: string;
};

export type TInitialState = {
  appearanceSettings: TAppearanceSettings | undefined;
  status: string;
  error: string | unknown;
};

const initialState: TInitialState = {
  appearanceSettings: {} as TAppearanceSettings,
  status: '',
  error: '',
};

const baseURL = 'http://csgofarm.online:8080/api/v1/front';

export const getSettings = createAsyncThunk('appearance/getSettings', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${baseURL}`);
    const settingsArray = res.data;
    const settings = settingsArray[settingsArray.length - 1];
    return settings;
  } catch (error) {
    return rejectWithValue((error as TErrorMessage).message);
  }
});

export const sendSettings = createAsyncThunk('appearance/sendSettings', async (data: any, { rejectWithValue }) => {
  // const formData = new FormData();
  // formData.append('textImage', data.textImage[0]);
  // formData.append('headerLogo', data.headerLogo[0]);
  // formData.append('backgroundCase', data.backgroundCase[0]);
  // formData.append('footerLogo', data.footerLogo[0]);
  // formData.append('backgroundMainBottom', data.backgroundMainBottom[0]);
  // formData.append('activeWindow', data.activeWindow);
  // formData.append('buttonText', data.buttonText);
  // formData.append('colorBackground', data.colorBackground);
  // formData.append('colorBackgroundOne', data.colorBackgroundOne);
  // formData.append('colorBackgroundTwo', data.colorBackgroundTwo);
  // formData.append('colorButton', data.colorButton);
  // formData.append('colorButtons', data.colorButtons);
  // formData.append('colorFooterDown', data.colorFooterDown);
  // formData.append('colorFooterUp', data.colorFooterUp);
  // formData.append('colorHeaderLeft', data.colorHeaderLeft);
  // formData.append('colorHeaderRight', data.colorHeaderRight);
  // formData.append('titleText', data.titleText);
  // formData.append('windowText', data.windowText);
  try {
    await axios.post(baseURL, data);
  } catch (error) {
    return rejectWithValue((error as TErrorMessage).message);
  }
});

export const appearanceSlice = createSlice({
  name: 'appearance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSettings.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getSettings.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.appearanceSettings = action.payload;
    });
    builder.addCase(getSettings.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    builder.addCase(sendSettings.pending, (state) => {
      state.status = 'sending';
    });
    builder.addCase(sendSettings.fulfilled, (state) => {
      state.status = 'loaded';
    });
    builder.addCase(sendSettings.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export default appearanceSlice.reducer;
