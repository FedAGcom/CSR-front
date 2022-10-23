import { SxProps } from "@mui/material";

const inputStyle: SxProps = {
    width: '160px',
    height: '38px',
    background: '#1C1B21',
    marginRight: '10px',
  };
  
  const colorBoxStyle: SxProps = {
    width: '38px',
    height: '38px',
    border: '1px solid #FFF',
    borderRadius: '5px',
  };
  
  const divider: SxProps = {
    backgroundColor: '#BDBDBD',
    marginBottom: '20px',
  };

  const title:SxProps={
    fontWeight: '500',
    marginBottom:'10px'
  }

  const inputWrapper:SxProps={
    display: 'flex',
  }

  const span:SxProps={
    marginRight: '15px',
    width: '170px',
    paddingTop:'7px' 
  }

  const labelWrapper: SxProps={
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
  }
  
  const labelHover:SxProps={
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
  }

  const imageBlock:SxProps={
    display:'flex',
    justifyContent:'center',
  }

  const mainSection:SxProps={
    display:'flex',
    marginBottom:'20px',
    paddingRight:'40px',
    justifyContent:'space-between'
  }

  const inputTypeFile:SxProps={
   opacity:0,
   height:0,
   width:0,
   lineHeight:0,
   overflow:'hidden',
   padding:0,
   margin:0
  }

  const submitButton:SxProps={
    width:'255px',
    height:'38px',
    color:'#FFF',
    borderRadius:'5px'
  }

  

  export {submitButton, inputTypeFile, labelHover, mainSection, imageBlock, labelWrapper, span, inputWrapper, title, inputStyle,colorBoxStyle,divider}