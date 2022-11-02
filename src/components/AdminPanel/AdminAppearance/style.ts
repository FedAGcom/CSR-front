import { Hidden, SxProps } from "@mui/material";

export const appearanceStyle:SxProps={
  '.MuiTypography-root' :{
    fontWeight: '500',
    marginBottom:'10px',
 },
  '.MuiDivider-root':{
    backgroundColor: '#BDBDBD',
    marginBottom: '20px',
 },
  '.MuiButton-root':{
    width:'255px',
    height:'38px',
    borderRadius:'5px'
  },
  '.MuiInput-root textarea':{
    height:'100% !important',
    overflow:'auto !important'
  },
  '.appearance__title':{
    fontSize:'24px'
 },
  '.footer__title,.header__title,.parameters__title,.popup__title':{
    fontSize:'20px'
 },
  '.inputWrapper':{
    display:'flex',
 },
  '.colorBox':{
    width: '38px',
    height: '38px',
    border: '1px solid #FFF',
    borderRadius: '5px',
  },
  '.mainSection':{
    display:'flex',
    marginBottom:'20px',
    paddingRight:'40px',
    justifyContent:'space-between'
  },
  '.mainSection .MuiTypography-root':{
    marginRight: '15px',
    width: '170px',
    paddingTop:'7px' 
  },
  '.mainSection .MuiInput-root':{
    width: '160px',
    height: '38px',
    background: '#1C1B21',
    marginRight: '10px',
    color:"#FFF",
  },
  '.labelWrapper':{
    position:'relative',
    width:'125px',
    height:'86px',
    border:'1px solid #B81034',
    borderRadius:'5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow:'hidden',
    '&:hover':{
      cursor:'pointer',
    },
  },
  '.labelWrapper .MuiInput-root':{
    //display:'none',
    opacity:0,
    width:0,
    height:0,
    lineHeight:0,
    overflow:"hidden",
    padding:0,
    margin:0,
    border:'none'
  },
  '.labelWrapper .MuiInputLabel-root':{
    position: 'absolute',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    opacity: 0,
    transformOrigin: 'center',
    transition: '.3s',
    '&:hover':{
      cursor:'pointer',
      opacity: 1,
      background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
    }
  },
}


