import { Box, SxProps, Typography } from '@mui/material';
import $api from '../../api';
import { useAppDispatch } from '../../store';
import { fetchUser } from '../../store/slices/userSlice';
import { ButtonBasic, ModalBasic } from '../index';

interface IModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  skinName: string;
  price: number;
  id?: string | number;
}

export function ConfirmSkinSaleModal({ skinName, price, open, onClose, onConfirm, id }: IModalProps) {
  const confirmSaleModalStyles: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '4px',
    '& .title': { fontFamily: 'Gilroy', fontWeight: '600', fontSize: '32px', marginBottom: '7px', lineHeight: '1' },
    '& .subTitle': {
      color: '#B81034',
      fontFamily: 'Gilroy',
      fontWeight: '600',
      fontSize: '32px',
      marginBottom: '18px',
      lineHeight: '1',
    },
    '& .message': { fontFamily: 'Gilroy', fontWeight: '500', fontSize: '22px', marginBottom: '30px', lineHeight: '1' },
  };

  const btnStyles: SxProps = {
    fontFamily: 'Gilroy',
    fontWeight: '500',
    fontSize: '16px',
    padding: '14px 32px 13px 32px',
    width: '185px',
  };

  const dispatch = useAppDispatch()
  const fetchSellItemById = async () => {
    await $api.get<any>(`http://csgofarm.online:8080/api/v1/itemsWon/sellAnItem/${id}`);
    dispatch(fetchUser())
  }

  return (
    <ModalBasic open={open} onClose={onClose}>
      <Box sx={confirmSaleModalStyles}>
        <Typography component="span" className="title">
          Вы точно хотите продать
        </Typography>
        <Typography component="span" className="subTitle">
          {skinName}?
        </Typography>
        <Typography component="span" className="message">
          После продажи вы получите
          <Typography component="span" sx={{ color: '#B81034' }}>
            {' '}
            {price} ₽{' '}
          </Typography>
          на ваш баланс
        </Typography>
        <Box sx={{ display: 'flex', columnGap: '30px' }}>
          <ButtonBasic className="outlined" onClick={onClose} sx={btnStyles}>
            Отмена
          </ButtonBasic>
          <ButtonBasic className="primary" onClick={() => {onConfirm(); fetchSellItemById()}} sx={btnStyles}>
            Продать
          </ButtonBasic>
        </Box>
      </Box>
    </ModalBasic>
  );
}
