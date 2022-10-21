import { SxProps } from '@mui/material';

export const titleStyles: SxProps = {
  fontFamily: 'Gilroy',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '29px',
}

export const tableStyles: SxProps = {
  borderCollapse: 'separate',
  borderSpacing: '0px 15px',
  '.MuiTableRow-root': {
    position: 'relative',
  },
  '.MuiTableRow-root.MuiTableRow-head:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    borderBottom: '1px solid #BDBDBD',
    top: '-5px',
    left: '0',
    right: '0',
    height: '1px solid #BDBDBD'
  },
  '.MuiTableRow-root.MuiTableRow-head:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    borderBottom: '1px solid #BDBDBD',
    bottom: '0px',
    left: '0',
    right: '0',
    height: '1px solid #BDBDBD'
  },
  '.MuiTableRow-root:not(.MuiTableRow-head):before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    border: '1px solid #BDBDBD',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  '.MuiTableBody-root .MuiTableRow-root:not(:first-of-type)': {
    top: '-10px',
  },
  '.MuiTableCell-root': {
    fontFamily: 'Gilroy', 
    fontWeight: '400', 
    fontSize: '14px', 
    lineHeight: '17px', 
    color: '#FFFFFF', 
    border: 'none',
    textAlign: 'center',
    padding: '18px 16px 21px 16px',
  },
  '.MuiTableCell-root.MuiTableCell-head': {
    padding: '3px 16px 9px 16px',
  },
  '.MuiButton-root': {
    textDecoration: 'underline',
    color: '#B81034',
  },
  '.withUrl': {
    color: '#B81034',
  },
  '.withoutUrl': {
    color: '#FFFFFF',
  }
}

export const modalStyles: SxProps = {
  '& > .MuiBox-root > .MuiBox-root': {
    width: 'auto',
    padding: '20px 30px 2px 30px',
    borderRadius: '5px',
  },
  '& > .MuiBox-root > .MuiBox-root > .MuiBox-root:nth-of-type(1) .MuiButtonBase-root': {
    position: 'relative',
    right: '15px',
    zIndex: '2',
  },
  '& > .MuiBox-root > .MuiBox-root > .MuiBox-root:nth-of-type(1) .close-icon': {
    fill: '#B81034',
  },

  '.content': {
    position: 'relative',
    top: '-29px',
    width: '730px',
  },
  
  '.title': {
    padding: '0 25px 20px 25px',
    borderBottom: '1px solid #BDBDBD',
    marginTop: '-4px',
  },
  '.title__text': {
    fontFamily: 'Gilroy',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    marginBottom: '20px',
  },

  '.info': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    padding: '18px 25px',
  },
  '.info__item': {
    display: 'flex',
    flexWrap: 'wrap',
  },
  '.info__text': {
    fontFamily: 'Gilroy',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '22px',
    marginRight: '17px',
    marginBottom: '5px',
  },
  '.info__text-content': {
    fontFamily: 'Gilroy',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '19px',
    width: '100%',
  },

  '.skins': {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px',
    borderTop: 'none',    // Для перекрытия стилей из _skins-modal.scss
    borderBottom: 'none', // Для перекрытия стилей из _skins-modal.scss
  },
  '.skins__title': {
    padding: '0 25px 22px 25px',
    fontFamily: 'Gilroy',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '22px',
  },
  '.skins__box': {
    padding: '20px 25px',
    borderTop: '1px solid #BDBDBD',
    borderBottom: '1px solid #BDBDBD',
    display: 'flex',
    columnGap: '10px',
    rowGap: '9px',
    flexWrap: 'wrap',
    maxHeight: '247px',
    overflowY: 'auto',
  },

  '.buttons': {
    display: 'flex',
    justifyContent: 'space-between',
    height: '38px',
    padding: '0 25px',
  },
  '.buttons .MuiButtonBase-root': {
    fontFamily: 'Gilroy',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#FFFFFF',
    padding: '10px 30px',
    borderRadius: '5px',
  },
  '.buttons .MuiButtonBase-root:first-of-type': {
    width: '260px',
  },
  '.buttons .MuiButtonBase-root:last-of-type': {
    width: '160px',
  },
}