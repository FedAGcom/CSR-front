import { TInitialState } from "../slices/appearanceSlice";

export type TStateType = {
    appearance : TInitialState
}

export const getColorHeaderLeft = (state:TStateType) => {
    return state.appearance.appearanceSettings?.colorHeaderLeft;
  };

export const getColorHeaderRight = (state:TStateType) => {
    return state.appearance.appearanceSettings?.colorHeaderRight;
  };  

export const getColorFooterUp = (state:TStateType) => {
    return state.appearance.appearanceSettings?.colorFooterUp;
  };   
  
export const getColorFooterDown = (state:TStateType) => {
    return state.appearance.appearanceSettings?.colorFooterDown;
  };     
  
export const getColorButtons = (state:TStateType) => {
    return state.appearance.appearanceSettings?.colorButtons;
  };       

export const getColorBackgroundOne = (state:TStateType) => {
    return state.appearance.appearanceSettings?.colorBackgroundOne;
  };   
  
export const getColorBackgroundTwo = (state:TStateType) => {
    return state.appearance.appearanceSettings?.colorBackgroundTwo;
  };

export const getTitleText = (state:TStateType) => {
    return state.appearance.appearanceSettings?.titleText;
  };  

export const getWindowText = (state:TStateType) => {
    return state.appearance.appearanceSettings?.windowTextTwo;
  };    

export const getButtonText = (state:TStateType) => {
    return state.appearance.appearanceSettings?.buttonText;
  };  
  
export const getColorButton = (state:TStateType) => {
    return state.appearance.appearanceSettings?.colorButton;
  }; 
  
export const getColorBackground = (state:TStateType) => {
    return state.appearance.appearanceSettings?.colorBackground;
  };   

export const getActiveWindow = (state:TStateType) => {
    return state.appearance.appearanceSettings?.activeWindow;
  };     

//image  
export const getHeaderLogo = (state:TStateType) => {
    return state.appearance.appearanceSettings?.headerLogo;
  };    
  
export const getFooterLogo = (state:TStateType) => {
    return state.appearance.appearanceSettings?.footerLogo;
  }; 
  
export const getBackgroundMainBottom = (state:TStateType) => {
    return state.appearance.appearanceSettings?.backgroundMainBottom;
  };   
  
export const getBackgroundCase = (state:TStateType) => {
    return state.appearance.appearanceSettings?.backgroundCase;
  };  

export const getTextImage = (state:TStateType) => {
    return state.appearance.appearanceSettings?.textImage;
  };    